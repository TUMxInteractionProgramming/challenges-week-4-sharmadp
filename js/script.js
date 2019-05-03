/* #6 start the #external #action and say hello */
console.log("App is alive");
var currentChannel ={};
var currentLocation = {
    longitude:77.691597 , 
    latitude:12.957310, 
    what3words:'bliss.calibrate.alarm'
}

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channelName) {
    //Log the channel switch
    console.log("Tuning in to channel", channelName.name);
    currentChannel= channelName;
    //console.log( currentChannel);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelName.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = "by <a href='http://w3w.co/'"+channelName.createdBy+" target='_blank'><strong>"+channelName.createdBy+"</strong></a>";

    /* #6 #liking channels on #click */
    
    /*$('#app-bar-star i').removeClass('fas');
    $('#app-bar-star i').addClass('far');*/

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName.name + ')').addClass('selected');

    var star = channelName.starred?'fas':'far';
    

    classProperty = star + ' fa-star';
    //console.log(classProperty);
  
   $('#chat #app-bar-star i').removeClass();
   $('#chat #app-bar-star i').addClass(classProperty);
}

function changeStar(){

    var element = event.target;
    event.stopPropagation();  
    $(element).toggleClass('fas far');

    $(element).hasClass('fas') ? currentChannel.starred=true:currentChannel.starred=false;
    console.log(currentChannel.starred);
    
    var star = currentChannel.starred?'fas':'far';
    

    classProperty = star + ' fa-star';
    //console.log(classProperty);
  
   $('#app-bar-star i').removeClass();
   $('#app-bar-star i').addClass(classProperty);
}


function changestarappbar(){

    console.log("app bar star clicked");
    var element = event.target;
    event.stopPropagation();  
    $(element).toggleClass('fas far');
    var className = $(element).attr('class');
    var star = className.slice(0,3);
    
    console.log('Dattatreya className ' + className);
    $('.selected .star i').removeClass();
    $('.selected .star i').addClass(className);
}
/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}


function formatDate(date){

    
    //var time2live = date.setMinutes(date.getMinutes() + 15);
    //time2live = new Date(date);

    console.log('dattatreya');
    console.log(date);
    console.log('dattatreya');
    var year = date.getFullYear();
    var month = date.getMonth();
    var date = date.getDate();
    //var day = date.prototype.getDay();
    //var minutes = date.prototype.getMinutes();
    //var hour = date.prototype.getHours();
    //var seconds = date.prototype.getSeconds();
    var formattedDate = date + '.' + month +
        '.' + year + ', ' +
        'hour' + ':' + 'minutes' + ':' + 'seconds';
    return formattedDate;
}





function Message(text){
    
    this.createdBy = currentLocation.what3words,
    this.latitude = currentLocation.latitude,
    this.longitude = currentLocation.longitude,
    
     //new Date().toLocaleDateString("en-US");
    //this.expiresOn = time2live;
    this.text = text;
    this.own=true;

    var date = new Date(); 
    this.createdOn = date.toLocaleString();
}



function sendMessage(){
    var msg = new Message($('#input-text').val());
    console.log(msg);
    $('#input-text').val("");
    $('#input-text').attr("placeholder", "Message...");
    
    var element = createMessageElement(msg);
    $( "#messages").append(element);
    $("#messages").scrollTop();
}

function createMessageElement(messageObject){
    var element = "<div class='message'> " + 
        "<h3><a href=" + "https://map.what3words.com/" + messageObject.createdBy +" target='_blank'><strong>" +
        messageObject.createdBy + "</strong></a>" +
        messageObject.createdOn + "<em>:expiresIn: min. left</em></h3>" + 
        "<p>" + messageObject.text + "</p>" +
        "<button>+5 min.</button> " + 
         "</div>";
    return element;

}