const Box = require("../model/Box");
const File = require("../model/File");

class FileController {
    async store(req, res){
        const box = await Box.findById(req.params.id)
        
        const file = await File.create({
            title: req.file.originalname,
            path: req.file.key
        });

        box.files.push(file);

        await box.save();
        
        //Criar um arquivo
        // console.log(req.file);

        req.io.sockets.in(box._id).emit('file',file);

        return res.send(box);
    }
}

module.exports = new FileController();