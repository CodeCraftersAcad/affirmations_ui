const formatDate = date => {
    const formattedDate = new Date(date);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return formattedDate.toLocaleString("en", options)
}

export default formatDate;