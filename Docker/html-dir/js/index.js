new Vue ({
	el: '.js-instance',
	name: 'vue-instance',
      
  data: {
      ostoslista: [],
      nextindex: 0 
  },
  
  mounted() {
    if(localStorage.getItem('ostoslista')){
      try{
        this.ostoslista = JSON.parse(localStorage.getItem('ostoslista'));
      }catch(e){
        localStorage.removeItem('ostoslista');
      }
    }
  },
 
  
	methods: {
		remove(index){
			this.ostoslista.splice(index,1);
      this.save();
		},
    
    save(){
      const parsed = JSON.stringify(this.ostoslista);
      localStorage.setItem('ostoslista', parsed);
    },
		
		add() {
			if (this.ostos === ''){
				return;
			}
      if (this.checkInput(this.ostos) === 0){
        return;
      }
			this.ostoslista.push({ostos: this.ostos, index: this.nextindex});
			this.ostos = '';
      this.nextindex = this.nextindex + 1;
      this.save();
  },

  
  checkInput(nimi) {
      var allowed = /[a-zA-Z0-9,. ]/;
      if (nimi.match(allowed)){
        return 1;
      }
      else{
        return 0;
      }
    }
  }
});


Vue.component('lista-sovellus' , {
  props: ['tulostuslista'],
  template: '<li> {{ tulostuslista.ostos }} </li>'
});