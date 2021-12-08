export class Trainee_Controller{
    //  constructor(){}
    create = function(req,res){
        res.send('This is Post respond call');
    }
    get = function (req,res) {
        res.send('this is get respond call');
    }
    put = function (req,res) {
        res.send('this is put respond call');
    }
    delete = function (req,res) {
        res.send('this is delete respond call');
    }
}

