const EpochConvert = (epochTimestamp, offset) => {
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    var d = new Date(epochTimestamp)
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000)
    var timestamp = new Date(utc + (3600000 * offset))
    
    return timestamp.toLocaleDateString("id-ID", options)
}

export default EpochConvert