const homelist = (req, res) => {
    // Sample data for demonstration purposes
    const articles = [
        {
            title: 'Mastering Data Structures and Algorithms: A Comprehensive Guide for Programmers',
            author: 'John Doe',
            content: 'This is the content of the first article.',
            publishedAt: new Date(),
            tags: ['tag1', 'tag2']
        },
        {
            title: 'Building Scalable Web Applications with Modern Frontend and Backend Technologies',
            author: 'Jane Smith',
            content: 'This is the content of the second article.',
            publishedAt: new Date(),
            tags: ['tag3', 'tag4']
        },
        {
            title: 'Effective Debugging Techniques: Finding and Fixing Bugs in Your Code',
            author: 'Erich Gamma',
            content: 'This is the content of the second article.',
            publishedAt: new Date(),
            tags: ['tag3', 'tag4']
        }
    ];

    res.render('index', { title: 'DevHub', articles: articles });
};

module.exports = {
    homelist
};
