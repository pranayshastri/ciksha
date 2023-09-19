// JavaScript function to toggle content
function toggleContent(topicNumber) {
    var content = document.getElementById('content' + topicNumber);
    
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}
