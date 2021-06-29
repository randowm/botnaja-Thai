var hw = [];
var remain;
var said;
const Discord = require('discord.js');
const {Client, Message, MessageAttachment} = require("discord.js");
const { data } = require("jquery");
const client = new Client();
const auth = require('./auth.json');

client.on('ready', () =>  {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => { 
    var main = (min,Hours,days,lmin,be) => {
        switch(days){
            case 1:
                switch(true){
                    case((Hours == 8 && min < 10) || (Hours < 8)):
                        msg.channel.send("ยังไม่เรียน");
                    break;
                    case(Hours == 8 && (min > 10 && min < 30)):
                    remain = ("อีก "+(510 - lmin) + " นาที" + be);  
                        msg.channel.send("Homeroom\n"+ remain +"\n8:10-8.30");
                    break;
                    case((Hours == 8 && min >= 30) || (Hours == 9 && min <= 15) ):
                    remain = ("อีก "+(555 - lmin) + " นาที" + be);  
                        msg.channel.send("คณิตเพิ่มพูน\n"+ remain +"\nครู\n8:30-9:15\nรหัส Class Room:\nลิ้งMeet:");
                    break;
                    case((Hours == 9 && min > 15) || (Hours == 10 && min <= 5) ):
                    remain = ("อีก "+(605 - lmin) + " นาที" + be);
                        msg.channel.send("วิทย์ ว23101\n"+ remain +"\nครู\n9:15-10:05\nรหัส Class Room:\nลิ้งMeet:");
                    break;
                    case((Hours == 10 && min > 5) || (Hours == 11 && min <= 45)):
                    remain = ("อีก "+(705 - lmin) + " นาที" + be); 
                        msg.channel.send("งานบ้าน ง23105\n"+ remain +"\nครู\n10:05-11:45\nรหัส Class Room:\nลิ้งMeet:");
                    break;
                    case((Hours == 11 && min > 45) || (Hours == 12 && min <= 35) ):
                    remain = ("อีก "+(755 - lmin) + " นาที" + be);
                        msg.channel.send("พักกลางวันนนน\n"+ remain +"\n11:45-12:35");
                    break;
                    case((Hours == 12 && min > 35) || (Hours == 13 && min <= 25) ):
                    remain = ("อีก "+(805 - lmin) + " นาที" + be); 
                        msg.channel.send("คณิตเพิ่ม ค23201\n"+ remain +"\nครู\n12:35-13:25\nรหัส Class Room:\nลิ้งMeet:");
                    break;
                    case((Hours == 13 && min > 25) || (Hours == 14 && min <= 15) ):
                    remain = ("อีก "+(855 - lmin) + " นาที" + be); 
                        msg.channel.send("ศิลปะ ศ23105\n"+ remain +"\nครู\n13:30-14:15\nรหัส Class Room:\nลิ้งMeet:");
                    break;
                    case((Hours == 14 && min > 15) || (Hours == 15 && min <= 05) ):
                    remain = ("อีก "+(905 - lmin) + " นาที" + be); 
                        msg.channel.send("คุณธรรม\n"+ remain +"\n14:15-15:05");
                    break;
                    default:
                        msg.channel.send("เลิกแล้วววไปทำไรก็ทำ");
                }
            break;
            case 2:
                switch(true){
                     case((Hours == 8 && min < 10) || (Hours < 8)):
                            msg.channel.send("ยังไม่เรียน");
                    break;
                    case(Hours == 8 && (min > 10 && min < 30)):
                    remain = ("อีก "+(510 - lmin) + " นาที" + be);  
                        msg.channel.send("Homeroom\n"+ remain +"\n8:10-8:30");
                    break;
                    case((Hours == 8 && min >= 30) || (Hours == 9 && min <= 15) ):
                    remain = ("อีก "+(555 - lmin) + " นาที" + be);  
                        msg.channel.send("ไทย ท23101\n"+ remain +"\nครู\n8:30-9:15\nรหัส Class Room:\nลิ้ง Meet:");
                    break;
                    case((Hours == 9 && min > 15) || (Hours == 10 && min <= 5) ):
                    remain = ("อีก "+(605 - lmin) + " นาที" + be);
                        msg.channel.send("สุขศึกษา พ23101\n"+ remain +"\nครู\n9:15-10:05\nรหัส Class Room:\nลิ้ง Meet:");
                    break;
                    case(Hours == 10 &&(min > 5 && min < 55)):
                    remain = ("อีก "+(655 - lmin) + " นาที" + be); 
                        msg.channel.send("ศิลปะ ศ23105\n"+ remain +"\nครู\n10:05-10:55\nรหัส Class Room:\nลิ้งMeet:");
                    break;
                     case((Hours == 10 && min > 55) || (Hours == 11 && min <= 45)):  
                        remain = ("อีก "+(705 - lmin) + " นาที" + be); 
                        msg.channel.send("พักกลางวันนนน\n"+ remain +"\n10:55-11:45");
                    break;
                    case((Hours == 11 && min > 45) || (Hours == 12 && min <= 35) ):
                    remain = ("อีก "+(755 - lmin) + " นาที" + be);
                        msg.channel.send("สังคม ส23101\n"+ remain +"\nครู\n11:45-12:35\nรหัส Class Room:\nลิ้ง Meet:");
                    break;
                    case((Hours == 12 && min > 35) || (Hours == 13) || (Hours == 14 && min <= 15) ):
                    remain = ("อีก "+(855 - lmin) + " นาที" + be); 
                        msg.channel.send("เลือกเสรี\n"+ remain +"\nครูก็เสรีอีกนั่นแหละ\n12:35-14:15\nรหัส Class Room:เหมือนกัน\nลิ้ง Meet:เหมือนกันแต่ลิ้งมีท");
                    break;
                    case((Hours == 14 && min > 15) || (Hours == 15 && min <= 55) ):  
                    remain = ("อีก "+(955 - lmin) + " นาที" + be); 
                    msg.channel.send("วิทย์เพิ่ม\n"+ remain +"\n\n14:15-15:55\nรหัส Class Room:\nลิ้ง Meet:");
                    break;
                    default:
                        msg.channel.send("เลิกเรียนแล้วววไปทำไรก็ทำ");
                    }
            break;
            case 3:
                switch(true){
                     case((Hours == 8 && min < 10) || (Hours < 8)):
                            msg.channel.send("ยังไม่เรียน");
                    break;
                    case(Hours == 8 && (min > 10 && min < 30)):
                    remain = ("อีก "+(510 - lmin) + " นาที" + be);  
                        msg.channel.send("Homeroom\n"+ remain +"\n8:10-8:30");
                    break;
                    case((Hours == 8 && min >= 30) || (Hours == 9 && min <= 15) ):
                    remain = ("อีก "+(555 - lmin) + " นาที" + be);  
                        msg.channel.send("ไทย ท23101\n"+ remain +"\nครู\n8:30-9:15\nรหัส Class Room:\nลิ้ง Meet:");
                    break;
                    case((Hours == 9 && min > 15) || (Hours == 10 && min <= 5) ):
                    remain = ("อีก "+(605 - lmin) + " นาที" + be);
                        msg.channel.send("คณิต ค23101\n"+ remain +"\nครู\n9:15-10:05\nรหัส Class Room:\nลิ้ง Meet:");
                    break;
                    case((Hours == 10 && min > 5) || (Hours == 11 && min <= 45)):
                        remain = ("อีก "+(705 - lmin) + " นาที" + be); 
                        msg.channel.send("การผลิตสื่อเพื่อการนำเสนอ ง20222\n"+ remain +"\nครู\n10:05-11:45\nรหัส Class Room:\nลิ้ง Meet:");
                    break;
                    case((Hours == 11 && min > 45) || (Hours == 12 && min <= 35) ):
                    remain = ("อีก "+(755 - lmin) + " นาที" + be);
                        msg.channel.send("พักกลางวันนนน\n"+ remain +"\n11:45-12:35");
                    break;
                    case((Hours == 12 && min > 35) || (Hours == 13 && min <= 25) ):
                    remain = ("อีก "+(805 - lmin) + " นาที" + be); 
                        msg.channel.send("ประวัติศาสตร์ ส23101\n"+ remain +"\nครู\n12:35-13:25\nรหัส Class Room:\nลิ้ง Meet:");
                    break;
                    case((Hours == 13 && min > 25) || (Hours == 14 && min <= 15) ):
                    remain = ("อีก "+(855 - lmin) + " นาที" + be); 
                        msg.channel.send("อังกฤษ อ23101\n"+ remain +"\nT.\n13:30-14:15\nรหัส Class Room:\nลิ้ง Meet:");
                    break;
                    case((Hours == 14 && min > 15) || (Hours == 15 && min <= 05) ):
                    remain = ("อีก "+(905 - lmin) + " นาที" + be); 
                        msg.channel.send("กิจกรรม\n"+ remain +"\n14:15-15:05");
                    break;
                    default:
                        msg.channel.send("เลิกเรียนแล้วววไปทำไรก็ทำ");
                        msg.channel.send(Hours);
                        msg.channel.send(min);
                    }
            break;
            case 4:
                switch(true){
                     case((Hours == 8 && min < 10) || (Hours < 8)):
                            msg.channel.send("ยังไม่เรียน");
                    break;
                    case(Hours == 8 && (min > 10 && min < 30)):
                    remain = ("อีก "+(510 - lmin) + " นาที" + be);  
                        msg.channel.send("Homeroom\n"+ remain +"\n8:10-8:30");
                    break;
                    case((Hours == 8 && min >= 30) || (Hours == 9) || (Hours == 10 && min <= 5) ):
                    remain = ("อีก "+(605 - lmin) + " นาที" + be);
                        msg.channel.send("วิทย์ ว23101\n"+ remain +"\nครู\n8:30-10:05\nรหัส Class Room:\nลิ้งMeet:");
                    break;
                    case( Hours == 10 && (min > 5 && min < 55)):
                    remain = ("อีก "+(655 - lmin) + " นาที" + be);
                        msg.channel.send("ไทย ท23101\n"+ remain +"\nครู\n10:05-10:55\nรหัส Class Room:\nลิ้ง Meet:");
                    break;
                     case((Hours == 10 && min > 55) || (Hours == 11 && min <= 45)):  
                        remain = ("อีก "+(705 - lmin) + " นาที" + be); 
                        msg.channel.send("พักกลางวันนนน\n"+ remain +"\n10:55-11:45");
                    break;
                    case((Hours == 11 && min > 45) || (Hours == 12 && min <= 35) ):
                    remain = ("อีก "+(755 - lmin) + " นาที" + be);
                        msg.channel.send("อังกฤษ อ23101\n"+ remain +"\nครู\n11:45-12:35\nรหัส Class Room:\nลิ้ง Meet:");
                    break;
                    case((Hours == 12 && min > 35) || (Hours == 13 && min <= 25) ):
                    remain = ("อีก "+(805 - lmin) + " นาที" + be); 
                        msg.channel.send("คณิต ค23101\n"+ remain +"\nครู\n12:35-13:25\nรหัส Class Room:\nลิ้ง Meet:");
                    break;
                    case((Hours == 13 && min > 25) || (Hours == 14 && min <= 15) ):
                    remain = ("อีก "+(855 - lmin) + " นาที" + be); 
                        msg.channel.send("ลูกเสือ\n"+ remain +"\nครู\n13:25-14:15\nรหัส Class Room:\nลิ้ง Meet:");
                    break;
                    case((Hours == 14 && min > 15) || (Hours == 15 && min <= 05) ):
                    remain = ("อีก "+(905 - lmin) + " นาที" + be); 
                        msg.channel.send("สังคม ส23101\n"+ remain +"\nครู\n14:15-15:05\nรหัส Class Room:\nลิ้ง Meet");
                    break;
                    default:
                        msg.channel.send("เลิกเรียนแล้วววไปทำไรก็ทำ");
                    break;
                    }
            break;
            case 5:
                switch(true){
                     case((Hours == 8 && min < 10) || (Hours < 8)):
                            msg.channel.send("ยังไม่เรียน");
                    break;
                    case(Hours == 8 && (min > 10 && min < 30)):
                    remain = ("อีก "+(510 - lmin) + " นาที" + be);  
                        msg.channel.send("Homeroom\n"+ remain +"\n8:10-8:30");
                    break;
                    case((Hours == 8 && min >= 30) || (Hours == 9 && min <= 15) ):
                    remain = ("อีก "+(555 - lmin) + " นาที" + be);  
                        msg.channel.send("อังกฤษ อ23101\n"+ remain +"\nครู\n8:30-9:15\nรหัส Class Room:\nลิ้ง Meet:");
                    break;
                    case((Hours == 9 && min > 15) || (Hours == 10 && min <= 5) ):
                    remain = ("อีก "+(605 - lmin) + " นาที" + be);
                        msg.channel.send("คณิตเพิ่ม ค23201\n"+ remain +"\nครู\n9:15-10:05\nรหัส Class Room:\nลิ้งMeet:");
                    break;
                    case( Hours == 10 && (min > 5 && min < 55)):
                    remain = ("อีก "+(655 - lmin) + " นาที" + be);
                        msg.channel.send("แนะแนว ก23912\n"+ remain +"\nครู\n10:05-10:55\nรหัส Class Room:\nลิ้ง Meet:");
                    break;
                     case((Hours == 10 && min > 55) || (Hours == 11 && min <= 45)):  
                        remain = ("อีก "+(705 - lmin) + " นาที" + be); 
                        msg.channel.send("พักกลางวันนนน\n"+ remain +"\n10:55-11:45");
                    break;
                    case((Hours == 11 && min > 45) || (Hours == 12 && min <= 35) ):
                    remain = ("อีก "+(755 - lmin) + " นาที" + be);
                        msg.channel.send("พละ พ23102\n"+ remain +"\nครู\n11:45-12:35\nรหัส Class Room:\nลิ้ง Meet:");
                    break;
                    case((Hours == 12 && min > 35) || (Hours == 13 && min <= 25) ):
                    remain = ("อีก "+(805 - lmin) + " นาที" + be); 
                        msg.channel.send("คณิต ค23101\n"+ remain +"\nครู\n12:35-13:25\nรหัส Class Room:\nลิ้ง Meet:");
                    break;
                    case((Hours == 13 && min > 25) || (Hours == 14 && min <= 15) ):
                    remain = ("อีก "+(855 - lmin) + " นาที" + be); 
                        msg.channel.send("อังกฤษ\n"+ remain + "\nครู\n13:25-14:15\nรหัส Class Room:ymet56a\nลิ้ง Meet:");
                    break;
                    case((Hours == 14 && min > 15) || (Hours == 15 && min <= 05) ):
                    remain = ("อีก "+(905 - lmin) + " นาที" + be); 
                        msg.channel.send("ประวัติศาสตร์ ส23101\n"+ remain +"\nครู\n14:15-15:05\nรหัส Class Room:\nลิ้ง Meet:");
                    break;
                    default:
                        msg.channel.send("เลิกเรียนแล้วววไปทำไรก็ทำ");
                }
            break;
            case 0:
                    msg.channel.send("วันหยุดจะเรียนไรหละ (--') ");
            break;
            case 6:
                if(lmin < 525){
                msg.channel.send("ยังไม่เรียน")}
                else if(lmin > 524 && lmin <= 615){
                    remain = 615 - lmin;
                    said = ("เหลือ " + remain +"  นาที")
                }
                else if(lmin > 615 && lmin < 630){
                    remain = 630 - lmin
                    msg.channel.send("เหลือ " + remain +"  นาที" + "\nพัก 15  นาที");
                }
                else if(lmin > 629 && lmin < 721){
                    remain = 720 - lmin
                    said = ("เหลือ " + remain +"  นาที")
                }
                else{
                    msg.channel.send("เลิกแล้วววว")
                }
                    const att4 = new MessageAttachment('./sat.jpg');
                    msg.channel.send(said + "\nคาบดูตารางเอาขี้เกียจแก้โค๊ดทุกสัปดาห์" , att4);
                    break;
            default:
            msg.channel.send("error");
            msg.channel.send(days);
        }
    }
    let group = msg.content.match(/!hwp\s+([a-zA-Z0-9_]*)/)
        if (group && group[1]) {
            hw.push(group[1])
            msg.channel.send("finish");
            return
        }
    let cla = msg.content.match(/!class\s+([0-9_]*)/)
        if (cla && cla[1]) {
            let rHours = 0;
            let re = (cla[1]*50) + 440;
            for (;re > 60;re -= 60) {
                rHours = rHours + 1;
            } 
            let be = " ถึงคาบ";
            let time = new Date();
            let days = time.getDay();
            let Hours = time.getHours();
            let min = time.getMinutes();
            let ex = (min+(Hours*60))
            main(re,rHours,days,ex,be)
        }
    let next = msg.content.match(/!([0-9_]*)nextclass/)
        if (next && next[1]) {
            let nextH = 0;
            let time = new Date();
            let days = time.getDay();
            let Hours= time.getHours();
            let min = time.getMinutes();
            let cls = (next[1]*50) + (min+(Hours*60));
            let tis = cls-50
            for(;cls > 60;cls -=60 ) {
                nextH = nextH + 1;
            }
            main(cls,nextH,days,tis," ถึงคาบ");
            }
    switch (msg.content) {
        /*case ("Hi") || ("Hello") :{
           msg.channel.send("คณิต\nHello");}
        break;*/
        case "!time":{   
            let time = new Date();
            let hours = time.getHours();
            let min = time.getMinutes();
            let lmin = (hours*60)+min;
            let days = time.getDay();
            if(days == 6){
                if((lmin > 524 && lmin <= 615)){
                    remain = 615 - lmin;
                    msg.channel.send("เหลือ " +remain+" นาที")
                }
                if((lmin > 629 && lmin < 721)){
                    remain = 720 - lmin;
                    msg.channel.send("เหลือ " +remain+" นาที")
                }
        }
            else{
            var subt = 555;
            llmin = (lmin - 510) /50
            llmin = Math.ceil(llmin);
            for(;llmin > 1;llmin--){
                subt = subt + 50;
            }
            let en = subt - lmin;
            msg.channel.send("เหลือ "+ en + " นาที") 
    }}
        break;
        case "+ะรทำ":{   
            let time = new Date();
            let hours = time.getHours();
            let min = time.getMinutes();
            let lmin = (hours*60)+min;
            let days = time.getDay();
            if(days == 6){
                if((lmin > 524 && lmin <= 615)){
                    remain = 615 - lmin;
                    msg.channel.send("เหลือ " +remain+" นาที")
                }
                if((lmin > 629 && lmin < 721)){
                    remain = 720 - lmin;
                    msg.channel.send("เหลือ " +remain+" นาที")
                }
        }
            else{
            var subt = 555;
            llmin = (lmin - 510) /50
            llmin = Math.ceil(llmin);
            for(;llmin > 1;llmin--){
                subt = subt + 50;
            }
            let en = subt - lmin;
            msg.channel.send("เหลือ "+ en + " นาที") 
    }}
        break;
        case "!class":{
            be = " หมดคาบ";
            let time = new Date();
        let days = time.getDay();
        let Hours = time.getHours();
        let min = time.getMinutes();
        let lmin = (min+(Hours*60))
            main(min,Hours,days,lmin,be)
    }
    break;  
        case "!nextclass":{
            let time = new Date();
let days = time.getDay();
let Hours = time.getHours();
let min = time.getMinutes();
            min = min + 45;
            let nmin = min+(Hours*60);
            for(;min >= 60; min -= 60){
                Hours += 1;
            }
            main(min,Hours,days,nmin," ถึงคาบ")
            }
        break;
        case "!beforeclass": {
            let time = new Date();
        let days = time.getDay();
        let Hours = time.getHours();
        let min = time.getMinutes();
        let ee = (Hours*60)+min;
                    min = min - 50;
                            for (;min < 0;min += 60){
                            Hours = Hours - 1;
                            }
                    main(min,Hours,days,ee," จะถึง")
        }
        break;      
        case "!lastclass": {
            let time = new Date();
            let day = time.getDay();
            switch (day) {
                case 1:
                    msg.channel.send("คุณธรรม\n14:15-15:05");
                break;
                case 2:
                    msg.channel.send("วิทย์เพิ่ม\n\n14:15-15:55\nรหัส Class Room:\nลิ้ง Meet:")
                break;
                case 3:
                    msg.channel.send("กิจกรรม\n14:15-15:05");
                break;
                case 4:
                    msg.channel.send("สังคม ส23101\nครู\n14:15-15:05\nรหัส Class Room:\nลิ้ง Meet");
                break;
                case 5:
                    msg.channel.send("ประวัติศาสตร์ ส23101\nครู\n14:15-15:05\nรหัส Class Room:\nลิ้ง Meet:");
                break;
                default:
                    msg.channel.send("วันหยุดจะมีเรียนได้ไง");
            }
        }
        break;
        case "!พัก":{
            let time = new Date();
            let day = time.getDay();
            switch(day){
                case 1:
                    msg.channel.send("พักกลางวัน\n11:50-12:35");
                break;
                case 2:
                    msg.channel.send("พักกลางวัน\n11:00-11:45");
                break;
                case 3:
                    msg.channel.send("พักกลางวัน\n11:50-12:35");
                break;
                case 4:
                    msg.channel.send("พักกลางวัน\n11:00-11:45");
                break;
                case 5:
                    msg.channel.send("พักกลางวัน\n11:00-11:45");
                break;
                default:
                    msg.channel.send("วันหยุดพักทั้งวัน");
            }}
        break;        
        case "!command":{
            const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("BOTNAJA Command")
            .addField("!time","บอกเวลาที่เหลือ")
            .addField("!class", "บอกคาบนี้")
            .addField("!class+คาบที่ต้องการ เช่น!class 1", "บอกคาบที่กำหนด")
            .addField("!nextclass", "บอกคาบหน้า")
            .addField("!Xnextclass เช่น !200nextclass","บอก x คาบหน้า")
            .addField("!beforeclass","บอกคาบที่แล้ว")
            .addField("!firstclass","บอกคาบแรก")
            .addField("!lastclass","บอกคาบสุดท้าย")
            .addField("!พัก","บอกเวลาพักในแต่ละวัน")
            .addField("!ตารางสอน","ตารางสอน")
            .addField("!command" ,"เพื่อเปิดหน้านี้")
            .setFooter("สร้างโดยกันนะจ๊ะ")
            msg.channel.send(embed)
        }
        break;
        case "!ตารางสอน":{
            const att2 = new MessageAttachment('./ตารางสอน.png');
            msg.channel.send(att2)}
        break;
    }})
    client.on('ready', async () =>  {
        var main = (min,Hours,days,lmin,be) =>{
            switch(days){
                case 1:
                    switch(true){
                        case((Hours == 8 && min < 10) || (Hours < 8)):
                            ans = ("ยังไม่เรียน");
                        break;
                        case(Hours == 8 && (min > 10 && min < 30)):
                        remain = ("อีก "+(510 - lmin) + " นาที" + be);  
                            ans = ("Homeroom\n"+ remain +"\n8:10-8.30");
                        break;
                        case((Hours == 8 && min >= 30) || (Hours == 9 && min <= 15) ):
                        remain = ("อีก "+(555 - lmin) + " นาที" + be);  
                            ans = ("คณิตเพิ่มพูน\n"+ remain +"\nครูกวิน แช่มชื่น\n8:30-9:15\nรหัส Class Room:mrqcphd\nลิ้งMeet:https://meet.google.com/xab-yxkj-wza?authuser=0");
                        break;
                        case((Hours == 9 && min > 15) || (Hours == 10 && min <= 5) ):
                        remain = ("อีก "+(605 - lmin) + " นาที" + be);
                            ans = ("วิทย์ ว23101\n"+ remain +"\nครูอโนทัย สำสีอ่อน\n9:15-10:05\nรหัส Class Room:asavgch\nลิ้งMeet:https://meet.google.com/lookup/dst6sehtd3?authuser=0&hs=179");
                        break;
                        case((Hours == 10 && min > 5) || (Hours == 11 && min <= 45)):
                        remain = ("อีก "+(705 - lmin) + " นาที" + be); 
                            ans = ("งานบ้าน ง23105\n"+ remain +"\nครูสุทิศา เสาวกุล\n10:05-11:45\nรหัส Class Room:jwjltsw\nลิ้งMeet:https://meet.google.com/lookup/eiuppgezle?authuser=0&hs=179");
                        break;
                        case((Hours == 11 && min > 45) || (Hours == 12 && min <= 35) ):
                        remain = ("อีก "+(755 - lmin) + " นาที" + be);
                            ans = ("พักกลางวันนนน\n"+ remain +"\n11:45-12:35");
                        break;
                        case((Hours == 12 && min > 35) || (Hours == 13 && min <= 25) ):
                        remain = ("อีก "+(805 - lmin) + " นาที" + be); 
                            ans = ("คณิตเพิ่ม ค23201\n"+ remain +"\nครูอุเทน ทรัพย์สิริไพบูลย์\n12:35-13:25\nรหัส Class Room:n2yzvqj\nลิ้งMeet:https://Meet.google.com/lookup/egnmfqd6q5?authuser=1&hs=179");
                        break;
                        case((Hours == 13 && min > 25) || (Hours == 14 && min <= 15) ):
                        remain = ("อีก "+(855 - lmin) + " นาที" + be); 
                            ans = ("ศิลปะ ศ23105\n"+ remain +"\nครูวิริทธิพล คำลือ\n13:30-14:15\nรหัส Class Room:opec6sr\nลิ้งMeet:ลิ้งพัง");
                        break;
                        case((Hours == 14 && min > 15) || (Hours == 15 && min <=5) ):
                        remain = ("อีก "+(905 - lmin) + " นาที" + be); 
                            ans = ("คุณธรรม\n"+ remain +"\n14:15-15:05");
                        break;
                        default:
                            ans = ("เลิกแล้วววไปทำไรก็ทำ");
                    }
                break;
                case 2:
                    switch(true){
                         case((Hours == 8 && min < 10) || (Hours < 8)):
                                ans = ("ยังไม่เรียน");
                        break;
                        case(Hours == 8 && (min > 10 && min < 30)):
                        remain = ("อีก "+(510 - lmin) + " นาที" + be);  
                            ans = ("Homeroom\n"+ remain +"\n8:10-8:30");
                        break;
                        case((Hours == 8 && min >= 30) || (Hours == 9 && min <= 15) ):
                        remain = ("อีก "+(555 - lmin) + " นาที" + be);  
                            ans = ("ไทย ท23101\n"+ remain +"\nครูสุจิตรา สุขชู\n8:30-9:15\nรหัส Class Room:bmbl4ul\nลิ้ง Meet:https://meet.google.com/lookup/ejqxemzyiz?authuser=0&hs=179");
                        break;
                        case((Hours == 9 && min > 15) || (Hours == 10 && min <= 5) ):
                        remain = ("อีก "+(605 - lmin) + " นาที" + be);
                            ans = ("สุขศึกษา พ23101\n"+ remain +"\nครูภิมุข ชัยชนะ\n9:15-10:05\nรหัส Class Room:w7puonj\nลิ้ง Meet:https://meet.google.com/lookup/cyrnwnexlr?authuser=0&hs=179");
                        break;
                        case(Hours == 10 &&(min > 5 && min < 55)):
                        remain = ("อีก "+(655 - lmin) + " นาที" + be); 
                            ans = ("ศิลปะ ศ23105\n"+ remain +"\nครูวิริทธิพล คำลือ\n10:05-10:55\nรหัส Class Room:opec6sr\nลิ้งMeet:https://meet.google.com/gpc-fnuy-kyv");
                        break;
                         case((Hours == 10 && min > 55) || (Hours == 11 && min <= 45)):  
                            remain = ("อีก "+(705 - lmin) + " นาที" + be); 
                            ans = ("พักกลางวันนนน\n"+ remain +"\n10:55-11:45");
                        break;
                        case((Hours == 11 && min > 45) || (Hours == 12 && min <= 35) ):
                        remain = ("อีก "+(755 - lmin) + " นาที" + be);
                            ans = ("สังคม ส23101\n"+ remain +"\nครูวิภาลัย ยารัมย์\n11:45-12:35\nรหัส Class Room:pvnsonu\nลิ้ง Meet:https://meet.google.com/lookup/bzqpcjy4oh?authuser=0&hs=179");
                        break;
                        case((Hours == 12 && min > 35) || (Hours == 13) || (Hours == 14 && min <= 15) ):
                        remain = ("อีก "+(855 - lmin) + " นาที" + be); 
                            ans = ("เลือกเสรี\n"+ remain +"\nครูก็เสรีอีกนั่นแหละ\n12:35-14:15\nรหัส Class Room:เหมือนกัน\nลิ้ง Meet:เหมือนกันแต่ลิ้งมีท");
                        break;
                        case((Hours == 14 && min > 15) || (Hours == 15 && min <= 55) ):  
                        remain = ("อีก "+(955 - lmin) + " นาที" + be); 
                        ans = ("วิทย์เพิ่ม\n"+ remain +"\nครูรักเกล้า ฉัตรจินดากุล\n14:15-15:55\nรหัส Class Room:ij77hdw\nลิ้ง Meet:https://meet.google.com/lookup/ceqv3ss7ke?authuser=1&hs=179");
                        break;
                        default:
                            ans = ("เลิกเรียนแล้วววไปทำไรก็ทำ");
                        }
                break;
                case 3:
                    switch(true){
                         case((Hours == 8 && min < 10) || (Hours < 8)):
                                ans = ("ยังไม่เรียน");
                        break;
                        case(Hours == 8 && (min > 10 && min < 30)):
                        remain = ("อีก "+(510 - lmin) + " นาที" + be);  
                            ans = ("Homeroom\n"+ remain +"\n8:10-8:30");
                        break;
                        case((Hours == 8 && min >= 30) || (Hours == 9 && min <= 15) ):
                        remain = ("อีก "+(555 - lmin) + " นาที" + be);  
                            ans = ("ไทย ท23101\n"+ remain +"\nครูสุจิตรา สุขชู\n8:30-9:15\nรหัส Class Room:bmbl4ul\nลิ้ง Meet:https://meet.google.com/lookup/ejqxemzyiz?authuser=0&hs=179");
                        break;
                        case((Hours == 9 && min > 15) || (Hours == 10 && min <= 5) ):
                        remain = ("อีก "+(605 - lmin) + " นาที" + be);
                            ans = ("คณิต ค23101\n"+ remain +"\nครูณัฐวุฒิ เติมสังข์\n9:15-10:05\nรหัส Class Room:iu3kfum\nลิ้ง Meet:");
                        break;
                        case((Hours == 10 && min > 5) || (Hours == 11 && min <= 45)):
                            remain = ("อีก "+(705 - lmin) + " นาที" + be); 
                            ans = ("การผลิตสื่อเพื่อการนำเสนอ ง20222\n"+ remain +"\nครูศุภกร สิทธิทา\n10:05-11:45\nรหัส Class Room:eckgp7u\nลิ้ง Meet:https://meet.google.com/lookup/e7jvux5vge?authuser=1&hs=179");
                        break;
                        case((Hours == 11 && min > 45) || (Hours == 12 && min <= 35) ):
                        remain = ("อีก "+(755 - lmin) + " นาที" + be);
                            ans = ("พักกลางวันนนน\n"+ remain +"\n11:45-12:35");
                        break;
                        case((Hours == 12 && min > 35) || (Hours == 13 && min <= 25) ):
                        remain = ("อีก "+(805 - lmin) + " นาที" + be); 
                            ans = ("ประวัติศาสตร์ ส23101\n"+ remain +"\nครูสุวรัตน์ กาญจนกุญชร\n12:35-13:25\nรหัส Class Room:f73edoi\nลิ้ง Meet:https://meet.google.com/lookup/ddmnijjgf4?authuser=1&hs=179");
                        break;
                        case((Hours == 13 && min > 25) || (Hours == 14 && min <= 15) ):
                        remain = ("อีก "+(855 - lmin) + " นาที" + be); 
                            ans = ("อังกฤษ อ23101\n"+ remain +"\nT.Laura Jacquays\n13:30-14:15\nรหัส Class Room:b36akm5\nลิ้ง Meet:https://meet.google.com/lookup/hyvq5q5upw?authuser=1&hs=179");
                        break;
                        case((Hours == 14 && min > 15) || (Hours == 15 && min <=5) ):
                        remain = ("อีก "+(905 - lmin) + " นาที" + be); 
                            ans = ("กิจกรรม\n"+ remain +"\n14:15-15:05");
                        break;
                        default:
                            ans = ("เลิกเรียนแล้วววไปทำไรก็ทำ");
                            ans = (Hours);
                            ans = (min);
                        }
                break;
                case 4:
                    switch(true){
                         case((Hours == 8 && min < 10) || (Hours < 8)):
                                ans = ("ยังไม่เรียน");
                        break;
                        case(Hours == 8 && (min > 10 && min < 30)):
                        remain = ("อีก "+(510 - lmin) + " นาที" + be);  
                            ans = ("Homeroom\n"+ remain +"\n8:10-8:30");
                        break;
                        case((Hours == 8 && min >= 30) || (Hours == 9) || (Hours == 10 && min <= 5) ):
                        remain = ("อีก "+(605 - lmin) + " นาที" + be);
                            ans = ("วิทย์ ว23101\n"+ remain +"\nครูอโนทัย สำสีอ่อน\n8:30-10:05\nรหัส Class Room:asavgch\nลิ้งMeet:https://meet.google.com/lookup/dst6sehtd3?authuser=0&hs=179");
                        break;
                        case( Hours == 10 && (min > 5 && min < 55)):
                        remain = ("อีก "+(655 - lmin) + " นาที" + be);
                            ans = ("ไทย ท23101\n"+ remain +"\nครูสุจิตรา สุขชู\n10:05-10:55\nรหัส Class Room:bmbl4ul\nลิ้ง Meet:https://meet.google.com/lookup/ejqxemzyiz?authuser=0&hs=179");
                        break;
                         case((Hours == 10 && min > 55) || (Hours == 11 && min <= 45)):  
                            remain = ("อีก "+(705 - lmin) + " นาที" + be); 
                            ans = ("พักกลางวันนนน\n"+ remain +"\n10:55-11:45");
                        break;
                        case((Hours == 11 && min > 45) || (Hours == 12 && min <= 35) ):
                        remain = ("อีก "+(755 - lmin) + " นาที" + be);
                            ans = ("อังกฤษ อ23101\n"+ remain +"\nครูการดา พาหา\n11:45-12:35\nรหัส Class Room:glt3w2a\nลิ้ง Meet:https://meet.google.com/lookup/aszhelps5q?authuser=0&hs=179");
                        break;
                        case((Hours == 12 && min > 35) || (Hours == 13 && min <= 25) ):
                        remain = ("อีก "+(805 - lmin) + " นาที" + be); 
                            ans = ("คณิต ค23101\n"+ remain +"\nครูณัฐวุฒิ เติมสังข์\n12:35-13:25\nรหัส Class Room:iu3kfum\nลิ้ง Meet:");
                        break;
                        case((Hours == 13 && min > 25) || (Hours == 14 && min <= 15) ):
                        remain = ("อีก "+(855 - lmin) + " นาที" + be); 
                            ans = ("ลูกเสือ\n"+ remain +"\nครูอโณทัย สำลีอ่อน  ครูครูสุจิตรา สุขชู\n13:25-14:15\nรหัส Class Room:gbidj3w\nลิ้ง Meet:");
                        break;
                        case((Hours == 14 && min > 15) || (Hours == 15 && min <=5) ):
                        remain = ("อีก "+(905 - lmin) + " นาที" + be); 
                            ans = ("สังคม ส23101\n"+ remain +"\nครูวิภาลัย ยารัมย์\n14:15-15:05\nรหัส Class Room:pvnsonu\nลิ้ง Meethttps://meet.google.com/lookup/bzqpcjy4oh?authuser=1&hs=179:");
                        break;
                        default:
                            ans = ("เลิกเรียนแล้วววไปทำไรก็ทำ");
                        break;
                        }
                break;
                case 5:
                    switch(true){
                         case((Hours == 8 && min < 10) || (Hours < 8)):
                                ans = ("ยังไม่เรียน");
                        break;
                        case(Hours == 8 && (min > 10 && min < 30)):
                        remain = ("อีก "+(510 - lmin) + " นาที" + be);  
                            ans = ("Homeroom\n"+ remain +"\n8:10-8:30");
                        break;
                        case((Hours == 8 && min >= 30) || (Hours == 9 && min <= 15) ):
                        remain = ("อีก "+(555 - lmin) + " นาที" + be);  
                            ans = ("อังกฤษ อ23101\n"+ remain +"\nครูการดา พาหา\n8:30-9:15\nรหัส Class Room:glt3w2a\nลิ้ง Meet:https://meet.google.com/lookup/aszhelps5q?authuser=0&hs=179");
                        break;
                        case((Hours == 9 && min > 15) || (Hours == 10 && min <= 5) ):
                        remain = ("อีก "+(605 - lmin) + " นาที" + be);
                            ans = ("คณิตเพิ่ม ค23201\n"+ remain +"\nครูอุเทน ทรัพย์สิริไพบูลย์\n9:15-10:05\nรหัส Class Room:n2yzvqj\nลิ้งMeet:https://Meet.google.com/lookup/egnmfqd6q5?authuser=1&hs=179");
                        break;
                        case( Hours == 10 && (min > 5 && min < 55)):
                        remain = ("อีก "+(655 - lmin) + " นาที" + be);
                            ans = ("แนะแนว ก23912\n"+ remain +"\nครูอรวรรณ ประดับจันทร์\n10:05-10:55\nรหัส Class Room:fti4bwe\nลิ้ง Meet:https://meet.google.com/lookup/h54sqe3lo7");
                        break;
                         case((Hours == 10 && min > 55) || (Hours == 11 && min <= 45)):  
                            remain = ("อีก "+(705 - lmin) + " นาที" + be); 
                            ans = ("พักกลางวันนนน\n"+ remain +"\n10:55-11:45");
                        break;
                        case((Hours == 11 && min > 45) || (Hours == 12 && min <= 35) ):
                        remain = ("อีก "+(755 - lmin) + " นาที" + be);
                            ans = ("พละ พ23102\n"+ remain +"\nครูเสน่ห์ พูลเพิ่ม\n11:45-12:35\nรหัส Class Room:v3nhhza\nลิ้ง Meet:https://meet.google.com/lookup/cnjioetzq2?authuser=1&hs=179");
                        break;
                        case((Hours == 12 && min > 35) || (Hours == 13 && min <= 25) ):
                        remain = ("อีก "+(805 - lmin) + " นาที" + be); 
                            ans = ("คณิต ค23101\n"+ remain +"\nครูณัฐวุฒิ เติมสังข์\n12:35-13:25\nรหัส Class Room:iu3kfum\nลิ้ง Meet:");
                        break;
                        case((Hours == 13 && min > 25) || (Hours == 14 && min <= 15) ):
                        remain = ("อีก "+(855 - lmin) + " นาที" + be); 
                            ans = ("อังกฤษ\n"+ remain + "\nT.Jason Seatin\n13:25-14:15\nรหัส Class Room:ymet56a\nลิ้ง Meet:https://meet.google.com/lookup/agjjvlof6v?authuser=1&hs=179");
                        break;
                        case((Hours == 14 && min > 15) || (Hours == 15 && min <= 5) ):
                        remain = ("อีก "+(905 - lmin) + " นาที" + be); 
                            ans = ("ประวัติศาสตร์ ส23101\n"+ remain +"\nครูสุวรัตน์ กาญจนกุญชร\n14:15-15:05\nรหัส Class Room:f73edoi\nลิ้ง Meet:https://meet.google.com/lookup/ddmnijjgf4?authuser=1&hs=179");
                        break;
                        default:
                            ans = ("เลิกเรียนแล้วววไปทำไรก็ทำ");
                    }
                break;
                case 0:
                        ans = ("วันหยุดจะเรียนไรหละ (--') ");
                break;
                case 6:
                    if(lmin < 525){
                    ans = ("ยังไม่เรียน")}
                    else if(lmin > 524 && lmin <= 615){
                        remain = 615 - lmin;
                        said = ("เหลือ " + remain +"  นาที")
                    }
                    else if(lmin > 615 && lmin < 630){
                        remain = 630 - lmin
                        ans = ("เหลือ " + remain +"  นาที" + "\nพัก 15  นาที");
                    }
                    else if(lmin > 629 && lmin < 721){
                        remain = 720 - lmin
                        said = ("เหลือ " + remain +"  นาที")
                    }
                    else{
                        ans = ("เลิกแล้วววว")
                    }
                        const att4 = new MessageAttachment('./sat.jpg');
                        ans = (said + "\nคาบดูตารางเอาขี้เกียจแก้โค๊ดทุกสัปดาห์" , att4);
                        break;
                default:
                ans = ("error");
                ans = (days);
            }
        }
            console.log(`Logged in as ${client.user.tag}!`);
        
            const commands = await getApp(guildId)
            .commands.get()
            console.log(commands)
        
            await getApp(guildId).commands.post({
                data: {
                    name: 'command',
                    description:'Show all command'
                },
            })
            await getApp(guildId).commands.post({
                data: {
                    name: 'class',
                    description:'show class'
                },
            })
            await getApp(guildId).commands.post({
                data: {
                    name: 'time',
                    description:'tell time left'
                },
            })
            await getApp(guildId).commands.post({
                data: {
                    name: 'nextclass',
                    description:'show next class'
                },
            })
            
            client.ws.on('INTERACTION_CREATE', async (interaction) =>{
               const { name, options} = interaction.data
        
               const command1 = interaction.data.name.toLowerCase()
        
                const args = {}
        
               if (command1 === 'class'){
                be = " หมดคาบ";
                let time = new Date();
            let days = time.getDay();
            let Hours = time.getHours();
            let min = time.getMinutes();
            let lmin = (min+(Hours*60))
                main(min,Hours,days,lmin,be)
            reply(interaction, ans)
        }
        else if (command1 === 'time') { 
            let time = new Date();
            let hours = time.getHours();
            let min = time.getMinutes();
            let lmin = (hours*60)+min;
            let days = time.getDay();
            if(days == 6){
                if((lmin > 524 && lmin <= 615)){
                    remain = 615 - lmin;
                    ans = ("เหลือ " +remain+" นาที")
                }
                if((lmin > 629 && lmin < 721)){
                    remain = 720 - lmin;
                    ans = ("เหลือ " +remain+" นาที")
                }
        }
            else{
            var subt = 555;
            llmin = (lmin - 510) /50
            llmin = Math.ceil(llmin);
            for(;llmin > 1;llmin--){
                subt = subt + 50;
            }
            let en = subt - lmin;
            ans = ("เหลือ "+ en + " นาที") 
    }
    reply(interaction, ans)
        }
        else if (command1 === 'nextclass'){
                let time = new Date();
    let days = time.getDay();
    let Hours = time.getHours();
    let min = time.getMinutes();
                min = min + 45;
                let nmin = min+(Hours*60);
                for(;min >= 60; min -= 60){
                    Hours += 1;
                }
                main(min,Hours,days,nmin," ถึงคาบ")
                reply(interaction , ans)
                }
    
        else if (command1 === 'command') {
                const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle("BOTNAJA Command")
                .addField("!time","บอกเวลาที่เหลือ")
                .addField("!class", "บอกคาบนี้")
                .addField("!class+คาบที่ต้องการ เช่น!class 1", "บอกคาบที่กำหนด")
                .addField("!nextclass", "บอกคาบหน้า")
                .addField("!Xnextclass เช่น !200nextclass","บอก x คาบหน้า")
                .addField("!beforeclass","บอกคาบที่แล้ว")
                .addField("!firstclass","บอกคาบแรก")
                .addField("!lastclass","บอกคาบสุดท้าย")
                .addField("!พัก","บอกเวลาพักในแต่ละวัน")
                .addField("!ตารางสอน","ตารางสอน")
                .addField("!command" ,"เพื่อเปิดหน้านี้")
                .setFooter("สร้างโดยกันนะจ๊ะ")
                
                for (const arg in args){
                    const value = args[arg]
                   embed.addField(arg, value) 
                }
               }
            })
        })
        
            //Check for embeds
            const reply = async (interaction, response) => {
                let data = { 
                    content: response,
                }
        
            if (typeof response === 'object'){
                data = await crateAPIMessage(interaction, response)
            }
        
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data,
                },
            })
        }
        
        const crateAPIMessage = async (interaction, content) => {
            const { data, files} = await Discord.APIMessage.create(
                client.channels.resolve(interaction.channel_id),
                content
            )
            .resolveData()
            .resolveFiles()
        
            return { ...data, files}
        }
        
client.login(auth.token);