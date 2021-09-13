const posts = [{
    createdBy : 1,
    createdAt : "01-03-2021",
    updatedAt : "06-03-2021",
    messsage : "This is message",
    comments : [{
        sentBy : 3,
        sentAt : "10-03-2021",
        liked : 2
    }]
},
{
    createdBy : 2,
    createdAt : "01-03-2021",
    updatedAt : "06-03-2021",
    messsage : "This is message 2",
    comments : [{
        sentBy : 1,
        sentAt : "10-03-2021",
        liked : 1
    }]
},
{
    createdBy : 3,
    createdAt : "01-03-2021",
    updatedAt : "06-03-2021",
    messsage : "This is message 3",
    comments : [{
        sentBy : 3,
        sentAt : "10-03-2021",
        liked : 1
    }]
}] 

module.exports = posts 