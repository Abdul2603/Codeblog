const blogHome = (req, res) => {
    res.render('blog-posts', {
        title: 'CodeLover - Explore the World of Coding',
        pageHeader: {
            title: 'CodeLover',
            strapline: 'Embark on a Journey Through the Wonders of Coding!'
        },
        sidebar: "Passionate about code and technology? CodeLover is your one-stop destination to delve into the captivating world of programming and development. Let CodeLover guide you on a magical coding adventure.",
        posts: [{
            title: 'Mastering JavaScript',
            author: 'TechWizard',
            date: 'October 17, 2023',
            category: 'JavaScript',
            summary: 'Unlock the secrets of JavaScript and become a coding sorcerer!',
            readTime: '5 min',
        },{
            title: 'The Art of Web Design',
            author: 'DesignMaestro',
            date: 'October 15, 2023',
            category: 'Web Design',
            summary: 'Craft stunning web experiences that leave a lasting impression.',
            readTime: '4 min',
        },{
            title: 'Building Your First App',
            author: 'AppGenius',
            date: 'October 12, 2023',
            category: 'App Development',
            summary: 'Turn your app dreams into reality with our expert guide.',
            readTime: '6 min',
        }]
    });
};

const blogPost = (req, res) => {  
    res.render('blog-post', { title: 'blogPost' });   
};

const writeBlogPost = (req, res) => {  
    res.render('blog-post-form', { title: 'writeBlogPost' });   
};

module.exports = {
    blogHome,
    blogPost,
    writeBlogPost
};
