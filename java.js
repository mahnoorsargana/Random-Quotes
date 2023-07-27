var quotes = [ 
    'High Agency: High Agency is about finding a way to get what you want, without waiting for conditions to be perfect or otherwise blaming the circumstances. High Agency People either push through in the face of adverse conditions or manage to reverse the adverse conditions to achieve goals',
    'Nothing is boring: Almost every field offers valuable lessons. If you think a field is not interesting, you have not done the work. Learning key ideas from many fields helps you develop new ideas and broaden your thinking. Creativity often happens at the intersection of seemingly unrelated areas.',
    'What are the things you can do today which make it easier to obtain your desired resources  and career opportunities tomorrow, in a way that is defensible and compounds overtime?',
    'People feel they do not have a network because they are not actively networking. But, remember, networks are heat-seeking missiles for value. Provide the value, and the network is there.',
    'The biggest obstacle to increasing your self-awareness is the tendency to avoid the discomfort that comes from seeing yourself as you really are. -- Travis Bradberry ',
    'Real things have risk. They have the possibility of failure. They have frustration. They force you to confront the possibility that maybe you just are not good enough.',
     'There is a luxury in self-reproach. When we blame ourselves, we feel that no one else has a right to blame us. It is the confession, not the priest, that gives us absolution - Oscar Wilde',
     'There is no such thing as a good influence. Because to influence a person is to give him ones own soul. He does not think his natural thoughts, or burn with his natural passions. His virtures are not real to him. His sins, if there are such thing as sins, are borrowed. He becomes an echo of someone elses music, an actor of a part that has not been written for him - Oscar Wilde'
     
    
]

function newQuote () {
    var randomNumber = Math.floor(Math.random( ) * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
