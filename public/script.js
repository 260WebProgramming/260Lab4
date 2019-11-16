var app = new Vue({
    el: '#app',
    data: {
        inputWord: '',
        currentTeam: '',
        question: '',

    },
    created: function() {
        this.getTeams();
    },
    methods: {
        guessNames() {
            var randomIndex = Math.floor((Math.random() * 30));
            var url = "getteams";
            fetch(url) 
                .then((data) => {
                    return (data.json());
                })
                .then((teamlist) => {
                    this.currentTeam = teamlist.data[randomIndex];
                    console.log(this.currentTeam);
                    document.getElementById("submission").style.visibility = "visible";
                    document.getElementById("question").innerHTML = "What is the name of the team from " + this.currentTeam.city + "?";
                    this.question = "name";
                    document.getElementById("answer").innerHTML = "";
                });
            
        },
        guessCities() {
            var randomIndex = Math.floor((Math.random() * 30));
            var url = "getteams";
            fetch(url) 
                .then((data) => {
                    return (data.json());
                })
                .then((teamlist) => {
                    this.currentTeam = teamlist.data[randomIndex];
                    console.log(this.currentTeam);
                    document.getElementById("submission").style.visibility = "visible";
                    document.getElementById("question").innerHTML = "What city are the " + this.currentTeam.name + " in?";
                    this.question = "city";
                    document.getElementById("answer").innerHTML = "";
                });
        },
        guessDivision() {
            var randomIndex = Math.floor((Math.random() * 30));
            var url = "getteams";
            fetch(url) 
                .then((data) => {
                    return (data.json());
                })
                .then((teamlist) => {
                    this.currentTeam = teamlist.data[randomIndex];
                    console.log(this.currentTeam);
                    document.getElementById("submission").style.visibility = "visible";
                    document.getElementById("question").innerHTML = "What division are the " + this.currentTeam.name + " in?";
                    this.question = "division";
                    document.getElementById("answer").innerHTML = "";
                });
        },
        guessConferences() {
            var randomIndex = Math.floor((Math.random() * 30));
            var url = "getteams";
            fetch(url) 
                .then((data) => {
                    return (data.json());
                })
                .then((teamlist) => {
                    this.currentTeam = teamlist.data[randomIndex];
                    console.log(this.currentTeam);
                    document.getElementById("submission").style.visibility = "visible";
                    document.getElementById("question").innerHTML = "What conference are the " + this.currentTeam.city + " in?";
                    this.question = "conference";
                    document.getElementById("answer").innerHTML = "";
                });
        },
        onSubmit() {
            console.log("onSubmit called");
            console.log(this.inputWord);
            if(this.question === "name") {
                if(this.inputWord.toLowerCase() === this.currentTeam.name.toLowerCase()) {
                    document.getElementById("answer").innerHTML = "You got it right!!!!";
                }
                else {
                    document.getElementById("answer").innerHTML = "Wrong!!!\n" + "The right answer is " + this.currentTeam.name;
                }
            }
            else if(this.question === "city") {
                if(this.inputWord.toLowerCase() === this.currentTeam.city.toLowerCase()) {
                    document.getElementById("answer").innerHTML = "You got it right!!!!";
                }
                else {
                    document.getElementById("answer").innerHTML = "Wrong!!!\n" + "The right answer is " + this.currentTeam.city;
                }
            }
            else if(this.question === "division") {
                if(this.inputWord.toLowerCase() === this.currentTeam.division.toLowerCase()) {
                    document.getElementById("answer").innerHTML = "You got it right!!!!";
                }
                else {
                    document.getElementById("answer").innerHTML = "Wrong!!!\n" + "The right answer is " + this.currentTeam.division;
                }
            }
            else {
                if(this.inputWord.toLowerCase() === this.currentTeam.conference.toLowerCase()) {
                    document.getElementById("answer").innerHTML = "You got it right!!!!";
                }
                else {
                    document.getElementById("answer").innerHTML = "Wrong!!!\n" + "The right answer is " + this.currentTeam.conference;
                }
            }

        },
        getTeams() {
            document.getElementById("submission").style.visibility = "hidden";
        /*    var url = "getteams";
            fetch(url) 
                .then((data) => {
                    return (data.json());
                })
                .then((teamlist) => {
                    console.log(teamlist.data[randomIndex]);
                });*/
        },
    }
});