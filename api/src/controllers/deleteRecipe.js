const { Recipe } = require(`../db.js`);

module.exports = async (req, res) => {
    try {
        
        const { id } = req.params

        const recipe = await Recipe.findByPk(id);

        await recipe.destroy();
        
        return res.send("Deleted Recipe");
        
    } catch (err) {

        return res.status(500).json()
    
    }
} 
