document.getElementById("save-btn").addEventListener("click", () => {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var number = document.getElementById("cnumber");
    var course = document.getElementById("clevel");
    var country = document.getElementById("countrypref");
    var dob = document.getElementById("DOB");

    if (name.value.trim() == "") {
        document.getElementById("no-name").style.visibility = "visible";

    }

    if (email.value.trim() == "") {

        document.getElementById("no-mail").style.visibility = "visible";


    }


    if (number.value.trim() == "" || number.value.length != 10) {

        document.getElementById("no-number").style.visibility = "visible";


    }


    if (course.value == "--select--") {
        document.getElementById("no-course").style.visibility = "visible";


    }

    if (country.value == "") {
        document.getElementById("no-country").style.visibility = "visible";

    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {

        document.getElementById("no-mail").style.visibility = "visible";



    } else {

        let classesToHide = ["no-name", "no-mail", "no-number", "no-course", "no-country"]

        document.getElementById("success-msg").style.visibility = "visible";

        classesToHide.forEach(item => {

            document.getElementById(item).style.visibility = "hidden";
        })






        var nameVal = name.value;
        var emailVal = email.value;
        var numberVal = number.value;
        var courseVal = course.value;
        var dobVal = dob.value;

        var countryVal = [];
        for (var option of document.getElementById('countrypref').options) {
            if (option.selected) {

                countryVal.push(option.value);
            }
        }






        let webTask = localStorage.getItem("localTask");

        if (webTask == null) {

            var taskObj = [];
        } else {

            taskObj = JSON.parse(webTask);
        }

        taskObj.push({

            "name": nameVal,
            "email": emailVal,
            "number": numberVal,
            "course": courseVal,
            "country": countryVal,
            "DOB": dobVal
        });
        localStorage.setItem("localTask", JSON.stringify(taskObj));
        document.getElementById('myform').reset();
        document.getElementById('myform2').reset();

    }





})





function search() {

    var searchVal = document.getElementById("searchBox").value;

    if (searchVal.trim() == "" || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(searchVal)) {

        document.getElementById("no-search").style.visibility = "visible";
        document.getElementById("no-search").style.color = "brown";

    } else {

        let webTask = localStorage.getItem("localTask");

        if (webTask == null) {

            var taskObj = [];
        } else {

            taskObj = JSON.parse(webTask);
        }

    }

    var flag = 0;

    taskObj.forEach((item, index) => {


        if (item.email == searchVal) {

            flag = 1;

            document.getElementById("no-record").style.visibility = "hidden";

            var parentDiv = document.createElement("div");
            var columnDiv = document.createElement("div");
            var dataDiv = document.createElement("div");

            parentDiv.id = "data-parent-holder";
            columnDiv.id = "column-div";
            dataDiv.id = "data-div"

            parentDiv.append(columnDiv);
            parentDiv.append(dataDiv);

            var cdiv1 = document.createElement("div");
            var cdiv2 = document.createElement("div");
            var cdiv3 = document.createElement("div");
            var cdiv4 = document.createElement("div");
            var cdiv5 = document.createElement("div");
            var cdiv6 = document.createElement("div");

            cdiv1.id = "name-div";
            cdiv2.id = "email-div"
            cdiv3.id = "cnumber-div";
            cdiv4.id = "clevel-div";
            cdiv5.id = "cpref-div";
            cdiv6.id = "dob-div";

            columnDiv.append(cdiv1);
            columnDiv.append(cdiv2);
            columnDiv.append(cdiv3);
            columnDiv.append(cdiv4);
            columnDiv.append(cdiv5);
            columnDiv.append(cdiv6);

            var columnText1 = document.createTextNode("Name");
            var columnText2 = document.createTextNode("Email");
            var columnText3 = document.createTextNode("Contact Number");
            var columnText4 = document.createTextNode("Course Level");
            var columnText5 = document.createTextNode("Country Preferences");
            var columnText6 = document.createTextNode("Date Of Birth");

            cdiv1.append(columnText1);
            cdiv2.append(columnText2);
            cdiv3.append(columnText3);
            cdiv4.append(columnText4);
            cdiv5.append(columnText5);
            cdiv6.append(columnText6);

            var ddiv1 = document.createElement("div");
            var ddiv2 = document.createElement("div");
            var ddiv3 = document.createElement("div");
            var ddiv4 = document.createElement("div");
            var ddiv5 = document.createElement("div");
            var ddiv6 = document.createElement("div");

            ddiv1.id = "name-div";
            ddiv2.id = "email-div"
            ddiv3.id = "cnumber-div";
            ddiv4.id = "clevel-div";
            ddiv5.id = "cpref-div";
            ddiv6.id = "dob-div";

            dataDiv.append(ddiv1);
            dataDiv.append(ddiv2);
            dataDiv.append(ddiv3);
            dataDiv.append(ddiv4);
            dataDiv.append(ddiv5);
            dataDiv.append(ddiv6);

            var dataText1 = document.createTextNode(item.name);
            var dataText2 = document.createTextNode(item.email);
            var dataText3 = document.createTextNode(item.number);
            var dataText4 = document.createTextNode(item.course);
            var dataText6 = document.createTextNode(item.DOB);

            ddiv1.append(dataText1);
            ddiv2.append(dataText2);
            ddiv3.append(dataText3);
            ddiv4.append(dataText4);
            ddiv6.append(dataText6);


            item.country.forEach((ele) => {

                var dataText5 = document.createTextNode(ele);
                var comma = document.createTextNode(", ");
                ddiv5.append(dataText5);
                ddiv5.append(comma);

            })











            document.getElementById("data-holder").append(parentDiv);
        }




    });

    if (flag == 0) {

        document.getElementById("no-record").style.visibility = "visible";
        document.getElementById("no-record").style.color = "brown";
        document.getElementById("no-record").style.fontSize = "18px";
        document.getElementById("no-search").style.visibility = "hidden";


    }





}