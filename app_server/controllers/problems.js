const problemsHome = (req, res) => {
    res.render('problems', {
        pageHeader: {
            title: 'Coding Problems - Challenge Yourself!',
            strapline: 'Test Your Coding Skills with These Exciting Challenges'
        },
        problems: [
            {
                title: 'Fibonacci Series',
                difficulty: 'Easy',
                datePublished: 'September 1, 2023',
                description: 'Solve this simple coding problem to get started with algorithms and data structures.'
            },
            {
                title: 'Fibonacci Series using Recursion',
                difficulty: 'Medium',
                datePublished: 'September 2, 2023',
                description: 'This intermediate-level coding challenge will test your problem-solving skills.'
            },
            {
                title: 'Tower of Hanoi',
                difficulty: 'Hard',
                datePublished: 'September 3, 2023',
                description: 'Are you up for a challenging coding problem? Try this advanced problem.'
            }
        ]
    });
};
