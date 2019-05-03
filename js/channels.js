var createdOn = new Date(2016, 4, 1);


var Yummy = {
    'name': '#Yummy',
    'createdOn': createdOn,
    'createdBy': 'minus.plus.yummy',
    'starred': false,
    'expiresIn': 100,
    'messageCount': 999

}

var SevenContinents = {
    'name': '#SevenContinents',
    'createdOn': createdOn,
    'createdBy': 'cheeses.yard.applies',
    'starred': true,
    'expiresIn': 1,
    'messageCount': 10351

}

var KillerApp = {
    'name': '#KillerApp',
    'createdOn': createdOn,
    'createdBy': 'minus.plus.yummy',
    'starred': false,
    'expiresIn': 300003,
    'messageCount': 2424

}

var FirstPersonOnMars = {
    'name': '#FirstPersonOnMars',
    'createdOn': createdOn,
    'createdBy': 'minus.plus.yummy',
    'starred': true,
    'expiresIn': 60,
    'messageCount': 321

}


var Octoberfest = {
    'name': '#Octoberfest',
    'createdOn': createdOn,
    'createdBy': 'minus.plus.yummy',
    'starred': false,
    'expiresIn': 100,
    'messageCount': 999

}

function createChannelElement(channelObject) {
    $("#channels-list").append(channelObject);

}


function listChannels() {

    var element_1 = $('<li>').attr('onclick', 'switchChannel(' + Yummy.name.substring(1) + ')')
        .text(Yummy.name)
        .append($('<span>').attr('class', 'channel-meta')
            .append($('<span>').attr('class', 'star').attr('onclick', "changeStar()")
                .append($('<i>').attr('class', 'far fa-star')))
            .append($('<span>').text(Yummy.expiresIn + ' min')
                .css({
                    'background-color': '#3F51B5',
                    'color': 'white',
                    'font-size': 'small', 'margin': '2px',
                }))
            .append($('<span>').text(Yummy.messageCount + ' new')
                .css({
                    'background-color': '#3F51B5',
                    'color': 'white',
                    'font-size': 'small', 'margin': '2px',
                    
                }))
            .append($('<i>').attr('class', 'fas fa-chevron-right')));


    var element_2 = $('<li>').attr('onclick', 'switchChannel(' + SevenContinents.name.substring(1) + ')')
        .text(SevenContinents.name).attr('class', 'selected')
        .append($('<span>').attr('class', 'channel-meta')
            .append($('<span>').attr('class', 'star').attr('onclick', "changeStar()")
                .append($('<i>').attr('class', 'fas fa-star')))
            .append($('<span>').text(SevenContinents.expiresIn + ' min')
                .css({
                    'background-color': '#3F51B5',
                    'color': 'white',
                    'font-size': 'small', 'margin': '2px'
                }))
            .append($('<span>').text(SevenContinents.messageCount + ' new')
                .css({
                    'background-color': '#3F51B5',
                    'color': 'white',
                    'font-size': 'small', 'margin': '2px'
                }))
            .append($('<i>').attr('class', 'fas fa-chevron-right')));


    var element_3 = $('<li>').attr('onclick', 'switchChannel(' + KillerApp.name.substring(1) + ')')
        .text(KillerApp.name)
        .append($('<span>').attr('class', 'channel-meta')
            .append($('<span>').attr('class', 'star').attr('onclick', "changeStar()")
                .append($('<i>').attr('class', 'far fa-star')))
            .append($('<span>').text(KillerApp.expiresIn + ' min')
                .css({
                    'background-color': '#3F51B5',
                    'color': 'white',
                    'font-size': 'small', 'margin': '2px'
                }))
            .append($('<span>').text(KillerApp.messageCount + ' new')
                .css({
                    'background-color': '#3F51B5',
                    'color': 'white',
                    'font-size': 'small', 'margin': '2px'
                }))
            .append($('<i>').attr('class', 'fas fa-chevron-right')));

    var element_4 = $('<li>').attr('onclick', 'switchChannel(' + FirstPersonOnMars.name.substring(1) + ')')
        .text(FirstPersonOnMars.name)
        .append($('<span>').attr('class', 'channel-meta')
            .append($('<span>').attr('class', 'star').attr('onclick', "changeStar()")
                .append($('<i>').attr('class', 'fas fa-star')))
            .append($('<span>').text(FirstPersonOnMars.expiresIn + ' min')
                .css({
                    'background-color': '#3F51B5',
                    'color': 'white',
                    'font-size': 'small', 'margin': '2px'
                }))
            .append($('<span>').text(FirstPersonOnMars.messageCount + ' new')
                .css({
                    'background-color': '#3F51B5',
                    'color': 'white',
                    'font-size': 'small', 'margin': '2px'
                }))
            .append($('<i>').attr('class', 'fas fa-chevron-right')));

    var element_5 = $('<li>').attr('onclick', 'switchChannel(' + Octoberfest.name.substring(1) + ')')
        .text(Octoberfest.name)
        .append($('<span>').attr('class', 'channel-meta')
            .append($('<span>').attr('class', 'star').attr('onclick', "changeStar()")
                .append($('<i>').attr('class', 'far fa-star')))
            .append($('<span>').text(Octoberfest.expiresIn + ' min')
                .css({
                    'background-color': '#3F51B5',
                    'color': 'white',
                    'font-size': 'small', 'margin': '2px'
                }))
            .append($('<span>').text(Octoberfest.messageCount + ' new')
                .css({
                    'background-color': '#3F51B5',
                    'color': 'white',
                    'font-size': 'small', 'margin': '2px'
                }))
            .append($('<i>').attr('class', 'fas fa-chevron-right')));


    createChannelElement(element_1);
    createChannelElement(element_2);
    createChannelElement(element_3);
    createChannelElement(element_4);
    createChannelElement(element_5);


}




