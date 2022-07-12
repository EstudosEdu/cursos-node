function searchUser(){
    return fetch('https://api.github.com/users/defunkt')
        .then(res => {
            return res.json();
        })
        .catch(err => {
            console.log('error => ', err);
        })
}

async function main(){
    try{
        const funcSearch = await searchUser();
        console.log(funcSearch);
    }
    catch(err){
        console.log('error dentro do try =>', err);
    }
}

main();