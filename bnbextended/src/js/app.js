App = {
  web3Provider: null,
  contracts: {},
  account: 0x0,

  init: function() {
    // Load property details
    $.getJSON('../property.json', function(data) {
      var propertiesRow = $('#propertiesRow');
      var propertyTemplate = $('#propertyTemplate');

      for (i = 0; i < data.length; i ++) {
        propertyTemplate.find('.panel-title').text(data[i].name);
        propertyTemplate.find('img').attr('src', data[i].picture);
        propertyTemplate.find('.property-type').text(data[i].type);
        propertyTemplate.find('.property-capacity').text(data[i].sleeps);
        propertyTemplate.find('.property-location').text(data[i].location);
        propertyTemplate.find('.btn-book').attr('data-id', data[i].id);
        propertyTemplate.find('.property-rate').text(data[i].rate);
        //set the rate as an attribute of the booking button as well:
        propertyTemplate.find('.btn-book').attr('data-value', data[i].rate);


        propertiesRow.append(propertyTemplate.html());
      }
    });

    App.displayAccountInfo();

    return App.initWeb3();
  },

  //Get current account info and display in header
  displayAccountInfo: function() {
    web3.eth.getCoinbase(function(err, account) {
      if(err === null) {
        App.account = account;
        $('#account').text("Current Account: " + account);
        web3.eth.getBalance(account, function(err, balance) {
          if(err === null) {
            $('#accountBalance').text("Current Balance: " + web3.fromWei(balance, "ether") + " ETH");
          }
        })
      }
    });
  },

  initWeb3: function() {
    //is there an injected web3 instance?
    if(typeof web3 !== 'undefined'){
      App.web3Provider = web3.currentProvider;
    } else {
      //if no injected web3 instance is detected, use Ganache
      App.web3Provider = new Web3.providers.HttpProvider("http://localhost:7545");
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('Booking.json', function(data){
      //Get the necessary contract artifact file and instantiate it
      var BookingArtifact = data;
      App.contracts.Booking = TruffleContract(BookingArtifact);

      //Set the provider for our contract
      App.contracts.Booking.setProvider(App.web3Provider);

      //Identify the properties that have already been booked
      return App.markBooked();

    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-book', App.handleBook);
  },

  markBooked: function(bookings, account) {
    var bookingInstance;
    App.contracts.Booking.deployed().then(function(instance){
      bookingInstance = instance;
      return bookingInstance.getBookings.call();
    }).then(function(bookings){
      for(i = 0; i < bookings.length; i++){
        if(bookings[i] == App.account){
          //if a booking was booked by the current account, change the button to "BOOKED" and disable it
          $('.panel-property').eq(i).find('button').text('BOOKED').attr('disabled', true).addClass('btn-success');
        }else if(bookings[i] !== '0x0000000000000000000000000000000000000000'){
          //if a booking is found from another booker, disable its booking buttona and change text to "UNAVAILABLE"
          $('.panel-property').eq(i).find('button').text('UNAVAILABLE').attr('disabled', true);
        }
      }

    }).catch(function(err){
      console.log(err.message);
    });

  },

  handleBook: function(event) {
    event.preventDefault();

    var propertyId = parseInt($(event.target).data('id'));
    var bookingInstance;
    //pull rate out of button value
    var _rate = parseFloat($(event.target).data('value'));
    var contractAddress = App.contracts.Booking.address; //GET CONTRACT ADDRESS

    web3.eth.getAccounts(function(error, accounts){
      if(error){
        console.log(error);
      }
      App.contracts.Booking.deployed().then(function(instance){
        bookingInstance = instance;
        //Execute book() - note, since it is a transaction we must send the from address and the value
        return bookingInstance.book(propertyId, {from: App.account, value: web3.toWei(_rate, "ether"), gas: 500000});
      }).then(function(result){
        return App.markBooked();
      }).catch(function(err){
        console.log(err.message);
      });
    });
  }
};


$(function() {
  $(window).load(function() {
    App.init();
  });
});
