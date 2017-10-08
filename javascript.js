new Vue({
	el:'#root',
	data:{
		newTask:'',
		tasks:[
			{description:'Go to the store',completed:true,editMode:false},
			{description:'Clear inbox',completed:false,editMode:false},
			{description:'Make dinner',completed:false,editMode:false}
		]
	},
	methods:{
		addTask(){
			this.tasks.push({description:this.newTask,completed:false,editMode:false});
			this.newTask='';
		},
		turnOnEditMode(key){
            this.tasks[key].editMode = true;
        },
        turnOffEditMode(key){
            this.tasks[key].editMode = false;
        },
        deleteTodo(key){
        	this.tasks.splice(key,1);
        } 
	}
})