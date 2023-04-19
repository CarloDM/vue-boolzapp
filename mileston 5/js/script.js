
const { createApp } = Vue ;

createApp({
  data(){
    return {
    contacts: [
      {name: 'Michele',
      avatar: 'img/avatar_1.jpg',
      visible: true,

      messages: [
      {
      date: '10/01/2020 15:30:55',
      message: 'Hai portato a spasso il cane?',
      status: 'sent'
      },
      {
      date: '10/01/2020 15:50:00',
      message: 'Ricordati di stendere i panni',
      status: 'sent'
      },
      {
      date: '10/01/2020 16:15:22',
      message: 'Tutto fatto!',
      status: 'received'
      }
      ],
      },

      {name: 'Fabio',
      avatar: 'img/avatar_2.jpg',
      visible: true,
      messages: [
      {
      date: '20/03/2020 16:30:00',
      message: 'Ciao come stai?',
      status: 'sent'
      },
      {
      date: '20/03/2020 16:30:55',
      message: 'Bene grazie! Stasera ci vediamo?',
      status: 'received'
      },
      {
      date: '20/03/2020 16:35:00',
      message: 'Mi piacerebbe ma devo andare a fare la spesa.',
      status: 'sent'
      }
      ],
      },

      {name: 'Samuele',
      avatar: 'img/avatar_3.jpg',
      visible: true,
      messages: [
      {
      date: '28/03/2020 10:10:40',
      message: 'La Marianna va in campagna',
      status: 'received'
      },
      {
      date: '28/03/2020 10:20:10',
      message: 'Sicuro di non aver sbagliato chat?',
      status: 'sent'
      },
      {
      date: '28/03/2020 16:15:22',
      message: 'Ah scusa!',
      status: 'received'
      }
      ],
      },

      {name: 'Alessandro B.',
      avatar: 'img/avatar_4.jpg',
      visible: true,
      messages: [
      {
      date: '10/01/2020 15:30:55',
      message: 'Lo sai che ha aperto una nuova pizzeria?',
      status: 'sent'
      },
      {
      date: '10/01/2020 15:50:00',
      message: 'Si, ma preferirei andare al cinema',
      status: 'received'
      }
      ],
      },

      {name: 'Alessandro L.',
      avatar: 'img/avatar_5.jpg',
      visible: true,
      messages: [
      {
      date: '10/01/2020 15:30:55',
      message: 'Ricordati di chiamare la nonna',
      status: 'sent'
      },
      {
      date: '10/01/2020 15:50:00',
      message: 'Va bene, stasera la sento',
      status: 'received'
      }
      ],
      },

      {name: 'Claudia',
      avatar: 'img/avatar_6.jpg',
      visible: true,
      messages: [
      {
      date: '10/01/2020 15:30:55',
      message: 'Ciao Claudia, hai novità?',
      status: 'sent'
      },
      {
      date: '10/01/2020 15:50:00',
      message: 'Non ancora',
      status: 'received'
      },
      {
      date: '10/01/2020 15:51:00',
      message: 'Nessuna nuova, buona nuova',
      status: 'sent'
      }
      ],
      },

      {name: 'Federico',
      avatar: 'img/avatar_7.jpg',
      visible: true,
      messages: [
      {
      date: '10/01/2020 15:30:55',
      message: 'Fai gli auguri a Martina che è il suo compleanno!',
      status: 'sent'
      },
      {
      date: '10/01/2020 15:50:00',
      message: 'Grazie per avermelo ricordato, le scrivo subito!',
      status: 'received'
      }
      ],
      },

      {name: 'Davide',
      avatar: 'img/avatar_8.jpg',
      visible: true,
      messages: [
      {
      date: '10/01/2020 15:30:55',
      message: 'Ciao, andiamo a mangiare la pizza stasera?',
      status: 'received'
      },
      {
      date: '10/01/2020 15:50:00',
      message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
      status: 'sent'
      },
      {
      date: '10/01/2020 15:51:00',
      message: 'OK!!',
      status: 'received'
      }
      ],
      }
      ],

      userName : 'user',
      userImg : 'img/avatar_io.jpg',
      chatIndex : 0,
      inMessage : '',
      nowDate : '',
      autoAnswers : ['ok','va bene', 'no','come preferisci','e se poi te ne penti???','buongiorno'],
      inSearch : '',
      messageIndex : null,

    }
  },
  

  methods : {
    activeChat(ind) {
      this.messageIndex = null
      this.chatIndex = ind
      console.log('active' ,this.contacts[ind].name)
    },

    sendMessage(){
      console.log('key',this.inMessage);
      message = this.inMessage ;
      date = this.getDate() +' '+ this.getTime() ;
      status = 'sent';
      outMessage = {date,message,status};
      this.contacts[this.chatIndex].messages.push(outMessage);
      console.log('key',this.contacts[this.chatIndex].messages,this.getDate());
      this.inMessage = '';
      setTimeout(() => {
        this.autoAnswer()
      }, 300);
    },

    autoAnswer(){
      R = Math.floor(Math.random()* this.autoAnswers.length)
      message = this.autoAnswers[R] ;
      date = this.getDate() +' '+ this.getTime() ;
      status = 'received';
      outMessage = {date,message,status};
      this.contacts[this.chatIndex].messages.push(outMessage);
      console.log('key',this.contacts[this.chatIndex].messages);
    },

    searchingLog(){
      console.log('sto cercando',  this.inSearch.toUpperCase())
    },

    toggleCancel(ind){
      if (this.messageIndex == ind){this.messageIndex = null}
      else{ this.messageIndex = ind;}
    },

    getTime(){
      const now = new Date();
      time = now.toLocaleTimeString()
      console.log(time)
      return time
    },

    getDate(){
      const now = new Date();
      date = now.toLocaleDateString()
      console.log(date)
      return date
    },

    chatOrder(){
      console.log(this.contacts[0].messages[0].date)
      dataIn = this.contacts[0].messages[0].date;
      dataTime = dataIn.split(' ')
      time = dataTime[1]
      TimeForCompare = time.split(':')
      hour = TimeForCompare[0]
      min = TimeForCompare[1]
      sec = TimeForCompare[2]
      timeCompare = parseInt(hour + min + sec)

      date = dataTime[0]
      dateForCompare = date.split('/')
      day = dateForCompare[0]
      mount = dateForCompare[1]
      year = dateForCompare[2]
      dateCompare = parseInt(year + mount + day)

      
      console.log(dataIn.split(' '),TimeForCompare,parseInt(hour + min + sec),dateCompare )
    }

  },
  mounted(){

  }
}).mount('#app')