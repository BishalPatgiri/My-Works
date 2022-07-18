function convert(a){
    let seconds = Math.floor((a / 1000) % 60);
    let minutes = Math.floor((a / (1000 * 60)) % 60);
    let hours = Math.floor((a / (1000 * 60 * 60)) % 24);

    if(seconds&&minutes&&hours)
    {
        return `${hours} hours ${minutes} minutes ${seconds} seconds`
    }
    else if(seconds&&minutes&&!hours)
    {
        return `${minutes} minutes ${seconds} seconds`
    }
    else if(seconds&&!minutes&&!hours)
    {
        return `${seconds} seconds`
    }
    else if(!seconds&&minutes&&!hours)
    {
        return `${minutes} minutes`
    }
    else if(!seconds&&!minutes&&hours)
    {
        return `${hours} hours`
    }

}

export default convert