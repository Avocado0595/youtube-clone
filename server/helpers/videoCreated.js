import moment from "moment-timezone";

// current time - created video time = about way is

const LIMIT_SECONDS = 60000; // < 60s

const LIMIT_MINUTES = 3600000; // <  60m

const LIMIT_HOURS = 86400000; // < 24h

const LIMIT_DAYS

    = daysInMonth() * 24 * 60 * 60 * 1000; // < 19, 28 30 or 31 days (*)

const LIMIT_MONTHS = daysInYear() * 24 * 60 * 60 * 1000; //< 12 months

function convertToMilliseconds(time, country) {
    const convertTimeByCountry = moment.tz(time, country);
    let initialTimeVideo = moment(convertTimeByCountry).valueOf();
    return initialTimeVideo;
}

function daysInMonth() {
    const currentTime = moment().format("YYYY/MM");
    const days = moment(currentTime, "YYYY/MM").daysInMonth();

    return days;
}

function daysInYear() {
    const currentYear = moment().year();
    const leapYear = moment([currentYear]).isLeapYear();
    const days = leapYear ? 366 : 365;
    return days;
}


function convertToCompleteTime(timePassed) {

    let convertRealTime = {
        time: 0,
        unit: "",
    };
    if (timePassed < LIMIT_SECONDS) {
        convertRealTime =
            {
                time: timePassed / 1000,
                unit: "second",
            }
    } else if (timePassed < LIMIT_MINUTES) {

        convertRealTime = {
            time: timePassed / 1000 / 60,
            unit: "minute",
        }
    } else if (timePassed < LIMIT_HOURS) {
        convertRealTime = {
            time: timePassed / 1000 / 60 / 60,
            unit: "hour",
        }
    } else if (timePassed < LIMIT_DAYS) {

        convertRealTime = {
            time: timePassed / 1000 / 60 / 60 / 24,
            unit: "day",
        }
    } else if (timePassed < LIMIT_MONTHS) {
        convertRealTime = {
            time: timePassed / 1000 / 60 / 60 / 24 / daysInMonth(),
            unit: "month",
        }
    } else {
        convertRealTime =
            {
                time: timePassed / 1000 / 60 / 60 / 24 / daysInYear(),
                unit: "year",
            }
    }
    convertRealTime = {
        ...convertRealTime,
        time: Math.floor(convertRealTime.time)
    }
    const {time, unit} = convertRealTime;
    return `${time} ${unit}${time > 1 ? "s" : ""} ago`;
}

const videoCreatedAbout = (time) => {
    const initialTimeVideo = convertToMilliseconds(time, "Asia/Ho_Chi_Minh");

    const currentTime = Date.now();

    const timePassed = currentTime - initialTimeVideo;

    return convertToCompleteTime(timePassed);
};


export default videoCreatedAbout;
