//array holders
var users, personnel, locations;

// ARRAY RIGHT MENU
var rightMenu, rightList1, rightList2, rightList3,rightList4;

// ARRAY LEFT MENU
var adminMenu, adminMessenger, adminDatabase, adminReports, adminSystem;

// state variables
var systemLocked, leftMenuOpen, leftSubMenuOpen, rightMenuOpen, rightSubMenuOpen, eventListState;

// banner variables
var time, date, currentEvent, systemStatus, connectedCount, update, companyName;

// Events Variables
var status, statusTypes, eventsList, topVal, newEvent, requestTypes, startTime, elapsedTime;

function init() {

  user = ['Marcus Campos'];
  locations = [];
  personnel = ['Raymond Vasquez', 'Joanna Weisskopf'];

  // EVENTS LIST VARIABLES
  eventsList = [
    [0,'Request','Requestor', 'Status','Start Time', 'Elapsed Time'],
  ];

  statusType = ['Assigned'];
  requestType = ['Help Request','Maintenance Request:', 'Medical Request', 'Security Request'];
  newEvent ='';
  topVal = 0;
  startTime = '8:04 AM';
  elapsedTime = '00:07:15';

  // ADMIN MENU ITEMS
  adminMenu = ['Admin', 'Manage Messenger', 'Manage Database', 'Reports', 'Manage System'];
  adminMessenger = ['Manage Messenger', 'Add/Update', 'User Settings', 'Messenger Settings'];
  adminDatabase = ['Manage Database', 'Notices', 'Sub-menu', 'User Profile'];
  adminReports = ['Reports', 'System Metrics', 'Request Metrics', 'Emergency Metrics'];
  adminSystem = ['Manage System', 'System Settings', 'Hardware', 'Backup and Restore'];

  // RIGHT MENU ITEMS
  rightMenu = ['right-menu','rightList1','rightList2','rightList3','rightList4'];
  rightList1 = ['rightList1','r-1 item-1','r-1 item-2','r-1 item-3'];
  rightList2 = ['rightList2','r-2 item-1','r-2 item-2','r-2 item-3'];
  rightList3 = ['rightList3','r-3 item-1','r-3 item-2','r-3 item-3'];
  rightList4 = ['rightList4','r-4 item-1','r-4 item-2','r-4 item-3'];

  // STATE VARIABLES
  systemLocked = true;
  leftMenuOpen = false;
  leftSubMenuOpen = false;
  rightMenuOpen = false;
  rightSubMenuOpen = false;
  eventListState = false;

  //BANNER ELEMENTS
  time = '<h1>1:27 PM</h1>';
  date = '<p>Wednesday May 18 2021</p>';
  currentEvent = '<h1>No Active Events</h1>';
  companyName = '<h1>Saint Francis Xavier</h1>';
  systemStatus = '<span class="key">Connected</span>';
  connectedCount = '<span class="key">128</span>';
  update = '<span class="key">None</span>';

  toggleBanner(systemLocked);
}
init();

// TEST BUTTONS
document.querySelector('.btn-addAlert').addEventListener('click',function(){
  generateEvent();
  displayEventsList(eventListState);
  var listCount = eventsList.length - 1;
  currentEvent = '<h1>' + listCount + ' Active Event(s)</h1>';
  toggleBanner(systemLocked);

});

document.querySelector('.btn-showAlert').addEventListener('click',function(){
  if(eventListState){
    eventListState = false;
  }else{
    eventListState = true;
  }
  displayEventsList(eventListState);
});

document.querySelector('.btn-clearAlert').addEventListener('click',function(){
  eventsList = [
    [0,'Request','Requestor', 'Status','Start Time', 'Elapsed Time'],
  ];

  currentEvent = '<h1>No Active Events</h1>';

  displayEventsList(eventListState);
  toggleBanner(systemLocked);
});


// LOCK - TOGGLE
document.querySelector('#bg-img').addEventListener('click', function() {
  if (systemLocked) {
    systemLocked = false;
  } else {
    systemLocked = true;
  }

  toggleBanner(systemLocked);
});





// LEFT MENU - OPEN
document.querySelector('#pane-1').addEventListener('mouseover', function() {

  if (systemLocked == false && leftMenuOpen == false) {
    leftMenuOpen = true;
    generateMenu(leftMenuOpen, '#menu-l-', adminMenu,'menu-l-');
  }
});
// RIGHT MENU - OPEN
document.querySelector('#pane-2').addEventListener('mouseover', function() {
  if (systemLocked == false && rightMenuOpen == false) {
    rightMenuOpen = true;
    generateMenu(rightMenuOpen, '#menu-r-', rightMenu,'menu-r-');
  }
});

// MENU - CLOSE
document.querySelector('.bg-img').addEventListener('mouseover', function() {
  if (systemLocked == false && leftMenuOpen == true) {
    leftMenuOpen = false;
    leftSubMenuOpen = false;
    generateMenu(leftMenuOpen, '#menu-l-', adminMenu,'menu-l-');
    generateMenu(leftSubMenuOpen, '#menu-l-s-', adminMessenger,'menu-l-');
  }
  if (systemLocked == false && rightMenuOpen == true) {
    rightMenuOpen = false;
    rightSubMenuOpen = false;
    generateMenu(rightMenuOpen, '#menu-r-', rightMenu,'menu-r-');
    generateMenu(rightSubMenuOpen, '#menu-r-s-', rightList1,'menu-r-');
  }
  document.querySelector('#menu-l-s-0').classList.remove('menu-l-s-0');
  document.querySelector('#menu-r-s-0').classList.remove('menu-r-s-0');
});

// LEFT MENU ITEM EVENTS
// MOUSE OVER
document.querySelector('#menu-l-1').addEventListener('mouseover', function() {
  document.querySelector('#menu-l-1').classList.add('menu-hover');
  document.querySelector('#menu-l-s-0').classList.add('menu-l-s-0');
  leftSubMenuOpen = true;
  generateMenu(leftSubMenuOpen, '#menu-l-s-', adminMessenger,'menu-l-');
});
document.querySelector('#menu-l-2').addEventListener('mouseover', function() {
  document.querySelector('#menu-l-2').classList.add('menu-hover');
  document.querySelector('#menu-l-s-0').classList.add('menu-l-s-0');
  leftSubMenuOpen = true;
  generateMenu(leftSubMenuOpen, '#menu-l-s-', adminDatabase,'menu-l-');
});
document.querySelector('#menu-l-3').addEventListener('mouseover', function() {
  document.querySelector('#menu-l-3').classList.add('menu-hover');
  document.querySelector('#menu-l-s-0').classList.add('menu-l-s-0');
  leftSubMenuOpen = true;
  generateMenu(leftSubMenuOpen, '#menu-l-s-', adminReports,'menu-l-');
});
document.querySelector('#menu-l-4').addEventListener('mouseover', function() {
  document.querySelector('#menu-l-4').classList.add('menu-hover');
  document.querySelector('#menu-l-s-0').classList.add('menu-l-s-0');
  leftSubMenuOpen = true;
  generateMenu(leftSubMenuOpen, '#menu-l-s-', adminSystem,'menu-l-');
});

// MOUSE OUT
document.querySelector('#menu-l-1').addEventListener('mouseout', function() {
  document.querySelector('#menu-l-1').classList.remove('menu-hover');
});
document.querySelector('#menu-l-2').addEventListener('mouseout', function() {
  document.querySelector('#menu-l-2').classList.remove('menu-hover');
});
document.querySelector('#menu-l-3').addEventListener('mouseout', function() {
  document.querySelector('#menu-l-3').classList.remove('menu-hover');
});
document.querySelector('#menu-l-4').addEventListener('mouseout', function() {
  document.querySelector('#menu-l-4').classList.remove('menu-hover');
});

// LEFT SUB MENU ITEM EVENTS
// MOUSE OVER
document.querySelector('#menu-l-s-1').addEventListener('mouseover', function() {
  document.querySelector('#menu-l-s-1').classList.add('menu-hover');
});
document.querySelector('#menu-l-s-2').addEventListener('mouseover', function() {
  document.querySelector('#menu-l-s-2').classList.add('menu-hover');
});
document.querySelector('#menu-l-s-3').addEventListener('mouseover', function() {
  document.querySelector('#menu-l-s-3').classList.add('menu-hover');
});

// MOUSE OUT
document.querySelector('#menu-l-s-1').addEventListener('mouseout', function() {
  document.querySelector('#menu-l-s-1').classList.remove('menu-hover');
});
document.querySelector('#menu-l-s-2').addEventListener('mouseout', function() {
  document.querySelector('#menu-l-s-2').classList.remove('menu-hover');
});
document.querySelector('#menu-l-s-3').addEventListener('mouseout', function() {
  document.querySelector('#menu-l-s-3').classList.remove('menu-hover');
});


// RIGHT MENU ITEM EVENTS
// MOUSE OVER
document.querySelector('#menu-r-1').addEventListener('mouseover', function() {
  document.querySelector('#menu-r-1').classList.add('menu-hover');
  document.querySelector('#menu-r-s-0').classList.add('menu-r-s-0');
  rightSubMenuOpen = true;
  generateMenu(rightSubMenuOpen, '#menu-r-s-', rightList1,'menu-r-');
});
document.querySelector('#menu-r-2').addEventListener('mouseover', function() {
  document.querySelector('#menu-r-2').classList.add('menu-hover');
  document.querySelector('#menu-r-s-0').classList.add('menu-r-s-0');
  rightSubMenuOpen = true;
  generateMenu(rightSubMenuOpen, '#menu-r-s-', rightList2,'menu-r-');
});
document.querySelector('#menu-r-3').addEventListener('mouseover', function() {
  document.querySelector('#menu-r-3').classList.add('menu-hover');
  document.querySelector('#menu-r-s-0').classList.add('menu-r-s-0');
  rightSubMenuOpen = true;
  generateMenu(rightSubMenuOpen, '#menu-r-s-', rightList3,'menu-r-');
});
document.querySelector('#menu-r-4').addEventListener('mouseover', function() {
  document.querySelector('#menu-r-4').classList.add('menu-hover');
  document.querySelector('#menu-r-s-0').classList.add('menu-r-s-0');
  rightSubMenuOpen = true;
  generateMenu(rightSubMenuOpen, '#menu-r-s-', rightList4,'menu-r-');
});

// MOUSE OUT
document.querySelector('#menu-r-1').addEventListener('mouseout', function() {
  document.querySelector('#menu-r-1').classList.remove('menu-hover');
});
document.querySelector('#menu-r-2').addEventListener('mouseout', function() {
  document.querySelector('#menu-r-2').classList.remove('menu-hover');
});
document.querySelector('#menu-r-3').addEventListener('mouseout', function() {
  document.querySelector('#menu-r-3').classList.remove('menu-hover');
});
document.querySelector('#menu-r-4').addEventListener('mouseout', function() {
  document.querySelector('#menu-r-4').classList.remove('menu-hover');
});

//RIGHT SUB MENU ITEM EVENTS
// MOUSE OVER
document.querySelector('#menu-r-s-1').addEventListener('mouseover', function() {
  document.querySelector('#menu-r-s-1').classList.add('menu-hover');
});
document.querySelector('#menu-r-s-2').addEventListener('mouseover', function() {
  document.querySelector('#menu-r-s-2').classList.add('menu-hover');
});
document.querySelector('#menu-r-s-3').addEventListener('mouseover', function() {
  document.querySelector('#menu-r-s-3').classList.add('menu-hover');
});

// MOUSE OUT
document.querySelector('#menu-r-s-1').addEventListener('mouseout', function() {
  document.querySelector('#menu-r-s-1').classList.remove('menu-hover');
});
document.querySelector('#menu-r-s-2').addEventListener('mouseout', function() {
  document.querySelector('#menu-r-s-2').classList.remove('menu-hover');
});
document.querySelector('#menu-r-s-3').addEventListener('mouseout', function() {
  document.querySelector('#menu-r-s-3').classList.remove('menu-hover');
});


// TOGGLE THE LOCK BANNER
function toggleBanner(lockCheck) {
  if (lockCheck) {
    document.querySelector('#banner-3').innerHTML = time + date;
    document.querySelector('#banner-4').innerHTML = currentEvent;
    document.querySelector('#banner-5').innerHTML = '<p>Welcome to</p>' + companyName;
    document.querySelector('#banner-6').innerHTML = '<p>System Status: ' + systemStatus + '</p><p>Messangers Online: ' + connectedCount + '</p><p>Update Scheduled: ' + update;
    document.querySelector('#bg-img').classList.add('pane-blur');
    for (var i = 0; i < 7; i++) {
      document.querySelector('#banner-' + i).classList.add('banner-' + i);
    }
  } else {
    document.querySelector('#banner-3').innerHTML = '';
    document.querySelector('#banner-4').innerHTML = '';
    document.querySelector('#banner-5').innerHTML = '';
    document.querySelector('#banner-6').innerHTML = '';
    document.querySelector('#bg-img').classList.remove('pane-blur');
    for (var j = 0; j < 7; j++) {
      document.querySelector('#banner-' + j).classList.remove('banner-' + j);
    }
  }

}

// GENERATE MENU LISTS
function generateMenu(menuState, menuType, arr, menuPosition) {
  if (menuState) { // BUILD THE MENU
    for (var i = 0; i < arr.length; i++) {
      // console.log(i);
      if (i > 0) {
        document.querySelector(menuType + i).innerHTML = '<p>' + arr[i] + '</p>';
      }
      document.querySelector(menuType + i).classList.add(menuPosition + i);
    }
  } else { // REMOVE THE MENU
    for (var j = 0; j < arr.length; j++) {
      // console.log(j);
      document.querySelector(menuType + j).classList.remove(menuPosition + j);
      if (j > 0) {
        document.querySelector(menuType + j).innerHTML = '';
      }
    }
  }
}

// GENERATE EVENT
function generateEvent(){
  var eventsListLength = eventsList.length;
  console.log(eventsListLength);
  eventsList.push([eventsListLength * 35,requestType[Math.floor(Math.random() * requestType.length)],personnel[Math.floor(Math.random() * personnel.length)],statusType[Math.floor(Math.random() * statusType.length)],startTime,elapsedTime]);
  // console.log(eventsList);
}

// DISPLAY EVENTS LIST
function displayEventsList(listState){

  document.querySelector('.eventsList').innerHTML = '';
  newEvent = '';

  if(listState){
  // 1st for loop builds the event tile
  for(var i = 0; i < eventsList.length; i++){
    // console.log('i - ' + i);
    newEvent += '<div class="event" style="top:' + eventsList[i][0] + 'px">';

    // second for loop builds the event elements
    for(var j = 1; j < eventsList[0].length; j++){
      // console.log('j - ' + j);
      console.log(eventsList[i][j]);
      newEvent += '<div class="eventElement"><p>' + eventsList[i][j] + '</p></div>';
    }
    newEvent += '</div>';
  }
  document.querySelector('.eventsList').innerHTML = newEvent;

  }else{
    document.querySelector('.eventsList').innerHTML = '';
  }
}


// end of line
