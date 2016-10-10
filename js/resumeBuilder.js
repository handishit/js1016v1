//var name = "Slark";
//var formattedName = HTMLheaderName.replace("%data%",name);

//var role = "Support Carry Nuker Disabler";
//var formattedRole = HTMLheaderRole.replace("%data%", role);

//$ ("#header").prepend(formattedName);

//$ ("#header").append(formattedRole);

//var skills = ["darkpact", "shadowdance", "scout"];

//$("#main").append(skills);

//$("#main").append(skills[2]);

//$("#main").append(skills.length);

/* var bio = {
	"name" : "Slark",
	"role" : "Semi Carry",
	"contacts" : {
		"mobile" : "082938293",
		"email" : "wawa@wawa.com",
		"twitter" : "hellraiser",
		"location" : "San Diego"
	},

	"welcomeMessage" : "Lorem Ipsum Dolor",
	"skills" : [
		"awesomeness", "laughing", "sleep"
	],
	"bioPic" : "images/fry.jpg"
} */

var work = {};
work.positions ="course developer";
work.employer ="udacity";
work.year = "0.3";

var education = {};
education["name"] = "south university";
education["year"] = "2010-2014";

$("#main").append(work["positions"]);
$("#main").append(education.name);


/* var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);

var bioPic = bio.bioPic
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var skills = bio.skills;
var formattedSkills = HTMLskills.replace("%data%", skills);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);

-----function-----------------------------------------------------------------

function prependToHeader(what, how) {
    $("#header").prepend( how.replace("%data%", what) );
}

function appendToResume(what, how, where) {
    $(where).append( how.replace("%data%", what) );
}

prependToHeader(bio.role, HTMLheaderRole);
prependToHeader(bio.name, HTMLheaderName);
appendToResume(bio.contacts.mobile, HTMLmobile, "#topContacts");
appendToResume(bio.contacts.email, HTMLemail, "#topContacts");
appendToResume(bio.contacts.github, HTMLgithub, "#topContacts");
appendToResume(bio.contacts.twitter, HTMLtwitter, "#topContacts");
appendToResume(bio.contacts.location, HTMLlocation, "#topContacts");
appendToResume(bio.bioPic, HTMLbioPic, "#header");
appendToResume(bio.welcomeMessage, HTMLWelcomeMsg, "#header");
$("#header").append(HTMLskillsStart);
appendToResume(bio.skills, HTMLskills, "#skills"); */



