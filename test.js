const mongoose = require('mongoose');
const BlogPOst = require('./modals/BlogPost')

mongoose.connect('mongodb://localhost/my_database')

const createBlogPost = async () => {
    const blogPost = new BlogPOst({
        title: 'The Mythbuster guid to saving money on energy bills',
        body: `In this blog post, we debunk common myths about energy savings and provide practical tips to reduce your energy bills effectively. Contrary to popular belief, turning off lights when not in use is more efficient than leaving them on. Using energy-efficient bulbs and motion sensors can further enhance savings. The idea that maintaining a constant temperature is cheaper is also a myth. It's more energy-efficient to lower your thermostat when you're away or asleep, and programmable thermostats can help manage this effectively.
    
        While many think hand washing dishes is cheaper than using a dishwasher, modern dishwashers are actually more efficient, especially when run only when full and on eco modes. Closing vents in unused rooms, another common misconception, can lead to HVAC inefficiencies. It's better to maintain your system regularly and consider zoning for better temperature control.
    
        Ceiling fans, often believed to cool rooms, actually just create a wind-chill effect and should be turned off when not in use. The notion that bigger appliances are more efficient is false; choosing appropriately sized, ENERGY STAR-rated appliances is key. Lastly, electric space heaters, though sometimes perceived as cost-effective, can be expensive to run, making good insulation and central heating maintenance more viable options.
    
        In addition to debunking these myths, we recommend sealing leaks, using natural light, unplugging devices to reduce phantom load, and regularly maintaining heating and cooling systems to ensure efficiency. By implementing these practical strategies, you can significantly reduce your energy bills and contribute to a greener planet.`
    })

    try {
        const savedBlogPost = await blogPost.save();
        console.log('blog created', savedBlogPost);
    } catch(err) {
        confirm.log('error', err)
    }
}

createBlogPost();