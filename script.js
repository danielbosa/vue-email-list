const {createApp} = Vue;

createApp({
    data(){
        return{
            emailList: [],
            numEmail: 10,
        }
    },
    methods:{
        getRndEmailList(){
            this.emailList = [];
            const emailListTemp = [];
            for(let i = 0; i < this.numEmail; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
                const email = res.data.response;
                emailListTemp.push(email);
                if(emailListTemp.length === this.numEmail){
                    this.emailList = [...emailListTemp];
                }
                });
                    

            };
            
        },
    },
    created(){

    }
}).mount('#app')