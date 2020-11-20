(function() {

    function Player(nick) {

        this.nick = nick;
        this.score = 0;
        this.id_Option = -1;
        this.flag = false; // true win / false lose
        this.option = null;
    }


    let user = new Player("GIOMY");
    let computer = new Player("COMPUTER");
    let winner;
    let level = 1;


    const game_optionsO = [
        {id: 1, name: "rock", id_with_win: 3, id_with_lose: 2, image : "./images/rock.png"},
        {id: 2, name: "paper", id_with_win: 1, id_with_lose: 3, image : "./images/paper.png"},
        {id: 3, name: "scissors", id_with_win: 2, id_with_lose: 1, image : "./images/scissors0.png"},
    ];

       const game_options1 = [
            {id: 1, name: "rock", id_with_win: [3], id_with_lose: [2], image : "./images/rock.png"},
            {id: 2, name: "paper", id_with_win: [1], id_with_lose: [3], image : "./images/paper.png"},
            {id: 3, name: "scissors", id_with_win: [2], id_with_lose: [1], image : "./images/scissors0.png"},
        ];

    const game_options2 = [
        {id: 1, name: "rock", id_with_win: [3,6], id_with_lose: [2,5], image : "./images/rock.png"},
        {id: 2, name: "paper", id_with_win: [1,4], id_with_lose: [3,6], image : "./images/paper.png"},
        {id: 3, name: "scissors", id_with_win: [2,5], id_with_lose: [1,4], image : "./images/scissors0.png"},
        {id: 4, name: "gun", id_with_win: [3,6], id_with_lose: {0: 2, 1: 5}, image : "./images/gun0.png"},
        {id: 5, name: "devil", id_with_win: [1,4], id_with_lose: [3,6], image : "./images/devil0.png"},
        {id: 6, name: "peace", id_with_win: [2,5], id_with_lose: [1,4], image : "./images/peace.png"},
    ];

    const game_options3 = [
        {id: 1, name: "rock", id_with_win: {0: 3, 1: 6}, id_with_lose: {0: 2, 1: 5}, image : "./images/rock.png"},
        {id: 2, name: "paper", id_with_win: {0: 1, 1: 4}, id_with_lose: {0: 3, 1: 6}, image : "./images/paper.png"},
        {id: 3, name: "scissors", id_with_win: {0: 2, 1: 5}, id_with_lose: {0: 1, 1: 4}, image : "./images/scissors0.png"},
        {id: 4, name: "gun", id_with_win: {0: 3, 1: 6}, id_with_lose: {0: 2, 1: 5}, image : "./images/gun0.png"},
        {id: 5, name: "devil", id_with_win: {0: 1, 1: 4}, id_with_lose: {0: 3, 1: 6}, image : "./images/devil0.png"},
        {id: 6, name: "peace", id_with_win: {0: 2, 1: 5}, id_with_lose: {0: 1, 1: 4}, image : "./images/peace.png"},
    ];



    /*var getGameOption = (id_option) =>{
        return game_options.find(option => option.id === id_option);
    }*/

    var getGameOption = (id_option) =>{
        if (level === 1)
            return game_options1.find(option => option.id === id_option);
        else
            return game_options2.find(option => option.id === id_option);
    }

    var isWinChildInOption = (option, id_optionTofind) =>{
        return option.id_with_win.indexOf(id_optionTofind) > -1 ? true : false;
    };

    var isLoseChildInOption = (option, id_optionTofind) =>{
        return option.id_with_lose.indexOf(id_optionTofind) > -1 ? true : false;
    };

    var getRandomNumber = (maxValue) => {
        console.log("getRandomNumber");
        return Number(Math.floor(Math.random() * maxValue)+ 1);
    }

    function check() {
        document.getElementById("level").checked = true;
    }

    function uncheck() {
        document.getElementById("level").checked = false;
    }

    function showLevel1(){
        /*document.getElementById("optionsByLevel").*/

    }

    function showLevel2(){

    }

    const showUserOption = () => {
        console.log("showUserOption");
        document.getElementById(user.id_Option.toString()).className = "dot";
    };

    const cleanUserOptionDesign = () => {
        console.log("cleanUserOptionDesign");
        if (user.id_Option !== -1) {
            document.getElementById(user.id_Option.toString()).className = "";
        }
    };

    const hiddenFreeOption = () => {
        console.log("hiddenFreeOption");
/*        Array.from(document.querySelectorAll("img.selector")).forEach(img => {
            console.log(" forEach hiddenFreeOption");
            console.log(" forEach img.id" + img.id);
            console.log(" forEach user.id_Option.toString()" + user.id_Option.toString());
            if (img.id !== user.id_Option.toString()) {
                console.log(" forEach img" + img.id);
                hiddenOption(img.id);
            }
        });*/

        console.log("images " + document.getElementsByTagName("img"));

        Array.from(document.getElementsByTagName("img")).forEach(img => {
            console.log("img.id" + img.id)
            let newOption = getGameOption(Number(img.id));
            console.log("new option" + newOption);
            if (newOption !== undefined){
                console.log(" forEach hiddenFreeOption");
                console.log(" forEach img.id" + img.id);
                console.log(" forEach user.id_Option.toString()" + user.id_Option.toString());
                if (img.id !== user.id_Option.toString()) {
                    console.log(" forEach img" + img.id);
                    hiddenOption(img.id);
                }
            }
        });

        /*Array.from(getElementByTagName("img")).forEach(a => {
            console.log(" forEach a");
            Array.from(a).forEach(img => {
                console.log(" forEach hiddenFreeOption");
                console.log(" forEach img.id" + img.id);
                console.log(" forEach user.id_Option.toString()" + user.id_Option.toString());
                if (img.id !== user.id_Option.toString()) {
                    console.log(" forEach img" + img.id);
                    hiddenOption(img.id);
                }
            });
        });*/




    }


    const hiddenOption = (id) => {
        console.log(" in hiddenOption "+ id);
        document.getElementById(id).style.visibility = "hidden";

    };

    const showOption = (id) => {
        console.log(" in showOption "+ id);
        document.getElementById(id).style.visibility = "visible";

    };

    const showComputerOption = () => {
        console.log("showComputerOption");
        document.getElementById("imageComputer").src = computer.option.image;
    };

    const setPerformOption = selection => {

        console.log("setPerformOption");
        console.log(selection);
        if (buttonValidate("run")) {
            console.log("buttonValidate run true");
            user.id_Option = Number(selection);
            showUserOption();
            hiddenFreeOption();
        }else {
            console.log("buttonValidate(run)  false");
        }
    };

    const setUserOption = () => {
        console.log("setUserOption");
        user.option = getGameOption(user.id_Option);
        console.log("setUserOption option");
        console.log(user.option);
    };

    const setComputerOption = () => {
        console.log("setComputerOption");
        let max = level === 1 ? game_options1.length : game_options2.length;

        /*computer.id_Option = getRandomNumber(game_options.length);*/
        computer.id_Option = getRandomNumber(max);
        console.log("setUserOption id option");
        console.log(computer.id_Option);
        computer.option = getGameOption(computer.id_Option);
        console.log(computer.option);
    };

    function getWinner0(){
        console.log("IN getWinner user");
        console.log(user);
        console.log("IN getWinner computer");
        console.log(computer);

            if (user.id_Option === computer.id_Option) {
                user.flag = false;
                computer.flag = false;
                console.log("IN getWinner IGUALES");

                return null;
            }else {
                if (user.option.id_with_win === computer.id_Option) {
                    user.flag = true;
                    computer.flag = false;
                    console.log("WINNER user");
                    winner = Object.assign({}, user);
                    return winner;

                } else if (user.option.id_with_lose === computer.id_Option) {
                    user.flag = false;
                    computer.flag = true;
                    console.log("WINNER PC");
                    winner = Object.assign({}, computer);
                    return winner;
                }
                return null;
            }
        }


    function getWinner(){
        console.log("IN getWinner user");
        console.log(user);
        console.log("IN getWinner computer");
        console.log(computer);

        if (user.id_Option === computer.id_Option) {
            user.flag = false;
            computer.flag = false;
            console.log("IN getWinner IGUALES");

            return null;
        }else {
            if (isWinChildInOption(user.option,computer.id_Option)) {
                user.flag = true;
                user.score += 10;
                computer.flag = false;
                console.log("WINNER user");
                winner = Object.assign({}, user);
                return winner;

            } else if (isLoseChildInOption(user.option,computer.id_Option)) {
                user.flag = false;
                computer.flag = true;
                computer.score += 10;
                console.log("WINNER PC");
                winner = Object.assign({}, computer);
                return winner;
            }
            return null;
        }
    }

    const showScore = () =>{
        document.getElementById("userScore").innerHTML = user.score;
        document.getElementById("computerScore").innerHTML = computer.score;
    }

    const showWinner = (message) =>{
        console.log("showWinner");
        winner = getWinner();
        console.log(winner);
        showMessage(getWinnerMessage());
        showScore();
    };

    /*const getMessage0 = (message) => {
        return function (message) {
            if (winner === null ) {
                message = "TIE!!!";
            }else {
                user.flag ? message = "YOU WON!!!" : message = "YOU LOST";
            }
        }
    }*/

    const getWinnerMessage = () => {
        let message;
        if (winner === null ) {
            message = "TIE!!!";
        }else {
            user.flag ? message = "YOU WON!!!" : message = "YOU LOST!!!";
        }
        console.log(message);
        return message;
    };

    const showMessage = (message) =>{
        document.getElementById("target").innerHTML = message;
    };

    const userValidate = () => {
        console.log("userValidate");
       return user.id_Option !== -1;
    };

    const buttonValidate = (id) => {
        console.log("buttonValidate inverse  " + document.getElementById(id).disable);
        return document.getElementById(id).disable === "false" || document.getElementById(id).disable === undefined? true : false;
    };

    const cleanBox = () => {
        document.getElementById("target").innerHTML ="";
    }

    const cleanComputerOptionDesign = () => {
        //TODO clean computer id_Option
        document.getElementById("imageComputer").src ="./images/Mickey-Mouse.gif";
    }

    const showAllOptions = () => {
        //TODO show by level
        //TODO clean user id_Option
        //TODO remove user listener?????
        console.log(" showAllOptions");
/*        Array.from(document.querySelectorAll("img.selector")).forEach(img => {
            console.log(" forEach showOption");
            showOption(img.id);
        });*/

        Array.from(document.getElementsByTagName("img")).forEach(img => {
            let newOption = getGameOption(Number(img.id));
            if (newOption !== undefined){
                console.log(" forEach showOption");
                showOption(img.id);
            }
        });

    }

    function disable(elm){
        return getElement(elm).setAttribute("disabled", true);
    }

    function enable(elm){
        return getElement(elm).removeAttribute("disabled");
    }

    function getElement(elm){
        return document.getElementById(elm);
    }

    function getElementByTagName(tag){
        return document.getElementsByTagName(tag);
    }

    function getElementByTagName(tag){
        return document.getElementsByTagName(tag);
    }

    /*function getElementChildTag(elm,tag){
        return document.getElementById(elm).getElementsByTagName(tag);
    }*/


    const resetUser = () => {

  /*      delete player.id_Option;
        delete player.option;
        delete player.flag;*/
        console.log(" resetUser");
        cleanUserOptionDesign();
        user.id_Option = -1;
        user.option = null;
        user.flag = false;
        console.log(user);

    };

    const resetComputer = () => {
        console.log(" resetComputer");
        computer.id_Option = -1;
        computer.option = null;
        computer.flag = false;
        console.log(computer);

    };

    const resetWinner = () => {
        console.log(" resetWinner");
        delete winner;
        console.log("delete winner " + winner);
        winner = new Player();
        console.log("new winner " + winner);
    };

    const resetPlayers = () => {
        resetUser();
        resetComputer();
        resetWinner();
    };

    const resetStyle = () => {
        console.log("resetStyle");
        cleanBox();
        cleanUserOptionDesign();
        cleanComputerOptionDesign();
        showAllOptions();
        enable("run");
    }

    const resetVariable = () => {
        resetPlayers();
    }

    const play = () => {
        return function () {
            console.log("PLAY START ");
           if (userValidate())
            {
                console.log("after userValidate true");
                disable("run");
                showMessage("WAITING FOR THE COMPUTER!!!");
                console.log("before user");
                setUserOption();
                console.log("before computer");
                setComputerOption();
                console.log("after computer");
                showComputerOption();
                console.log("before show winner");
                showWinner();
                /*winner = getWinner();
                //TODO: SHOWRESULT
                console.log(winner);*/
                /*winner != null ?
                    console.log(`Winner ${winner.nick}`) :
                    console.log(`TIE!`);*/
                /*showMessage(getMessage());*/
                //TODO RESET VALUE
            }else{
               console.log("after userValidate false");
               showMessage("SELECT YOUR WEAPON TO PLAY!!!");
               enable("run");
           }
            console.log("PLAY OVER ");
        };
    };

    const reset = () => {
        return function () {
            resetVariable();
            resetStyle();
        };
    };


    Array.from(document.querySelectorAll("img.selector")).forEach($img =>
        $img.addEventListener(
            "click",
            () => (setPerformOption($img.id), false),
        ),
    );

    document.getElementById("runAgain").addEventListener("click", reset());

    const enableLevel2 = () =>{
        document.getElementById("myLevel").innerHTML = "YOU ARE IN LEVEL 2";
        document.getElementById("myLevelChange").innerHTML = "CHANGE LEVEL 1";
        document.getElementById("levelTable").style.visibility = "visible";
    }

    const enableLevel1 = () =>{
        document.getElementById("myLevel").innerHTML = "YOU ARE IN LEVEL 1";
        document.getElementById("myLevelChange").innerHTML = "CHANGE LEVEL 2";
        document.getElementById("levelTable").style.visibility = "hidden";
    }



    document.getElementById("level").addEventListener( 'change', function() {
        if(this.checked) {
            // Checkbox is checked..
            level = 2;
            enableLevel2();
        } else {
            // Checkbox is not checked..
            level = 1;
            enableLevel1();
        }
    });


    document.getElementById("run").addEventListener("click", play()); /*function(){
        console.log("before user");
        setUserOption();
        console.log("before computer");
        setComputerOption();
        console.log("after computer");
        showComputerOption();
        console.log("before winner");
        winner = getWinner();
        //TODO: SHOWRESULT
        console.log(winner);
        winner != null ?
            console.log(`Winner ${winner.nick}`) :
            console.log(`TIE!`);*/




})();
