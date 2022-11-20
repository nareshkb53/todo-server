const crypto=require("crypto");

module.exports={
    encode:(str,key)=>{
        let  crypt = crypto.createCipher('aes-128-cbc', key);
        let output = crypt.update(str, 'utf8', 'hex')
        output += crypt.final('hex');
        return output;
    },
    decode:(encoded,key)=>{
        try{
            var mykey = crypto.createDecipher('aes-128-cbc', key);
            var output = mykey.update(encoded, 'hex', 'utf8')
            output += mykey.final('utf8');

            return JSON.stringify({error:0, data:output});
        }catch(e){
            return JSON.stringify({error:1, data:''});
        }
    }
}