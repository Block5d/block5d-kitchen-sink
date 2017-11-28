var member = require('./models/exile');

const url = '/api/ldh'

module.exports = function(app){
    app.get(url , (req,res)=>{
        console.log(`get ${url}`)
        member.find(function(err,menba){
            if(err){
                res.status(500).send(err);
                return;
            }
            res.status(200).json(menba);
        })
    })
    app.post(url , (req,res)=>{
        console.log(req.body);
        let addmember = req.body;
        let newmember = new member();
        newmember.url = addmember.url;
        newmember.name = addmember.name;
        newmember.content = addmember.content;
        var error = newmember.validateSync();
        if(!error){
            newmember.save(function(err,result){
                res.status(201).json(result);
            });
        }else{
            console.log(error);
            res.status(500).send(error);
        }
    })
}

//   Exile: any[] = [{
//     url: '02',
//     name : 'hiro',
//     content: '五十岚海螺:二胎努力中'
//   }, {
//     url: '03',
//     name : 'matsu',
//     content: '麻酱:matsu一人中'
//   }, {
//     url: '04',
//     name : 'usa',
//     content: 'uusauuusa:女工兼任中'
//   }, {
//     url: '05',
//     name : 'makidai',
//     content: '辅爷:疯狂打碟中'
//   }, {
//     url: '06',
//     name : 'atsushi',
//     content: '佐藤喜皇后:大眼卡姿兰代言中'
//   }, {
//     url: '07',
//     name : 'akira',
//     content: '黑泽大傻:EXPG开张中'
//   }, {
//     url: '08',
//     name : 'takahiro',
//     content: '田崎masaki:一胎奶粉钱诈骗中'
//   }, {
//     url: '09',
//     name : 'kenchi',
//     content: '立花啃吃桑:奈尔可爆炸中'
//   }, {
//     url: '10',
//     name : 'keiji',
//     content: '管饭:'
//   }, {
//     url: '11',
//     name : 'tetsuya',
//     content: 'EXPG到底还开不开'
//   }, {
//     url: '12',
//     name : 'nesmith',
//     content: 'EXPG到底还开不开'
//   }, {
//     url: '13',
//     name : 'shokichi',
//     content: 'EXPG到底还开不开'
//   }, {
//     url: '14',
//     name : 'naoto',
//     content: 'EXPG到底还开不开'
//   }, {
//     url: '15',
//     name : 'naoki',
//     content: 'EXPG到底还开不开'
//   }, {
//     url: '16',
//     name : 'gun',
//     content: 'EXPG到底还开不开'
//   }, {
//     url: '17',
//     name : 'alan',
//     content: 'EXPG到底还开不开'
//   }, {
//     url: '18',
//     name : 'mandy',
//     content: 'EXPG到底还开不开'
//   }, {
//     url: '19',
//     name : 'seikai',
//     content: 'EXPG到底还开不开'
//   }, {
//     url: '20',
//     name : 'taiki',
//     content: 'EXPG到底还开不开'
//   }];