// Required packages
const fs = require('fs');
const path = require('path');



function generateCss() {
    let html_string = `header {
        text-align: center;
        padding: 3%;
        padding-left: 0px;
        background-color: #1a232b;
        color: rgb(0, 255, 213);
        row-gap: 6px;
    }
    a {
        color:rgb(65, 141, 255);
        text-decoration:none;
    }
    
    body {
        display: flex;
        flex-direction: column;
        line-height: 1.3;
        background-color: #141414;
        color:rgb(0, 255, 213);
    }
    
    main {
        display: flex;
        flex-direction: row;
        padding: 50px
    }
    
    .card {
        background-color: rgb(11, 83, 143);
        max-width: 33rel;
        color: rgb(0, 255, 213);
    }
    
    .card-header {
        background-color: rgb(17, 33, 122);
        font-size: 30px;
    }
    .card-columns {
        width: 33%;
    }
    
    .list-group-item {
        background-color: #2c3b49;
        color: rgb(0, 255, 213);
    }
    .row {
        justify-content: center;
    }
    
    `

    return html_string;    
}


module.exports = generateCss;