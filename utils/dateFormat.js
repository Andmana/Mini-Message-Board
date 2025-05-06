import moment from "moment";

const dateFormat = (added) => {
    const date = moment(added);
    return date.format("dddd, D MMMM YYYY");
};

export default dateFormat;
