export default function get_time() {
    var d = new Date()
    var minutes = d.getMinutes().toString().length === 1 ? '0' + d.getMinutes() : d.getMinutes()
    var hours = d.getHours().toString().length === 1 ? '0' + d.getHours() : d.getHours()
    // var ampm = d.getHours() >= 12 ? 'pm' : 'am';
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + '\n' + days[d.getDay()] + ' ' + hours + ':' + minutes;
}