$(document).ready(function () {
    console.log("ready!");
    let $myButton = $('<button>OMG</button>')
    $myButton.click(function () {
        alert("sorry I'm unavailable")

    });
    $('body').append($myButton)


    $('#otherBtn').click(function () {
        alert("jQuery is no fun :(")
    });

    let colorArray = ['red', 'blue', 'purple', 'orange', 'green', 'yellow', 'pink'];
    let $container = $('<div class="container"></div>')
    $('body').append($container)
    $container.mouseover(function () {
        const randomNum = Math.floor((Math.random() * colorArray.length));
        $container.css({
            backgroundColor: colorArray[randomNum]
        })

    });

    $container.mouseout(function () {
        $container.css({
            backgroundColor: ""
        })
    });

    let $Para = $('#paragraph')
    $Para.click(function () {
        const randomNum = Math.floor((Math.random() * colorArray.length));
        $Para.css({
            "color": `${colorArray[randomNum]}`
        })
    });
});

let $btn = $('#btn3');
let $nameSpan = $('<span></span>');
 let $nameText = 'Robert Coleman';
let $newDiv = $('#space');
$("body").append($newDiv)

$btn.click(function () {
$nameSpan.append($nameText);
$newDiv.append($nameSpan)
});

let $friends = ['Daniel', 'Mike', 'Anthony', 'Victor', 'Matt', 'Craig', 'Danny', 'P', 'Quentin', 'Dom'];
let $list = $('#list');
let counter = 0
let $Button4 = $('#btn4');

$Button4.click(function () {
let $li = $("<li></li>")
$li.text($friends[counter])
$list.append($li);
counter++
});

