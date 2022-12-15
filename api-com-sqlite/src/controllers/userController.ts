import openDB from '../configDb';

class UserController {
    async createTable(req, res){
        try{
            const DB = await openDB();
            DB.exec('CREATE TABLE IF NOT EXISTS User  (id INTEGER PRIMARY KEY, name TEXT, idade INTEGER)');
            return res.status(200).json({message: 'Success'});
        }catch(e){
            console.log('ERROR', e);
            
            return res.status(500).json({message: "Error"});
        }
    }

    async register(req, res){
        const { name, idade } = req.body;
        try{
            const DB = await openDB();
            DB.run('INSERT INTO User (name, idade) VALUES (?,?)', [name, idade]);
            return res.status(200).json({message: 'Success'});
        }catch(e){
            console.log('ERROR', e);
            
            return res.status(500).json({message: "Error"});
        }
    }


    async update(req, res){
        const { id, name, idade } = req.body;
        try{
            const DB = await openDB();
            DB.run('UPDATE User SET name=?, idade=? WHERE id=?', [name, idade, id]);
            return res.status(200).json({message: 'Success'});
        }catch(e){
            console.log('ERROR', e);
            
            return res.status(500).json({message: "Error"});
        }
    }

    async delete(req, res){
        const { id } = req.params;
        try{
            const DB = await openDB();
            DB.run('DELETE FROM User WHERE id=?', [id]);
            return res.status(200).json({message: 'Success'});
        }catch(e){
            console.log('ERROR', e);
            
            return res.status(500).json({message: "Error"});
        }
    }
}

export default new UserController;