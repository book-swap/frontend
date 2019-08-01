<template>
  <div class="card chat">
    <div class="contacts" v-if="displayContacts">
      <ul>
        <li
          v-for="(contact, index) in contacts"
          :key="index"
          :class="{ selected: selectedUser.id === contact.id }"
        >
          <a href="#" @click="() => changeSelectedUser(contact)">
            <img
              :src="
                `https://ui-avatars.com/api/?size=64&name${
                  contact.firstName
                }%20${contact.lastName}`
              "
              :alt="`${contact.firstName} ${contact.lastName}`"
            />
            <span>{{ contact.firstName }} {{ contact.lastName }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div
      class="conversation"
      :style="{ minWidth: displayContacts ? 'auto' : '100%' }"
    >
      <ul class="messages">
        <Message
          v-for="(message, index) in messages"
          :key="index"
          :text="message.message"
          :fromMe="message.from === $store.state.user.id"
        />
      </ul>
      <form @submit.prevent="sendMessage">
        <input
          type="text"
          placeholder="Scrie un mesaj..."
          v-model="newMessage"
        />
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.selected {
  background: $blue-main !important;
  a {
    color: white !important;
  }
}
form {
  align-self: flex-end;
  width: 100%;
}
input {
  max-width: 100%;
  width: 100%;
  width: fill-available;
  padding: 0 10px;
  background-color: #fff;
  border: none;
  border-top: 1px solid #dbdbdb;
  color: #363636;
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);

  line-height: 1.5;
  height: 2em;
}
.messages {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.contacts {
  border-right: 1px solid #ececec;
  flex: 0 0 30%;
  max-width: 30%;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      &:first-child {
        border-top-left-radius: 7px;
      }
      a {
        color: black;
        text-decoration: none;
        display: flex;
        align-items: center;
        padding: 1rem;
        img {
          width: 6rem;
          height: auto;
          border-radius: 100%;
        }
        span {
          margin-left: 1rem;
          word-break: break-all;
        }
      }
    }
  }
}
.messages {
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
}
.conversation {
  flex: 0 0 70%;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.chat {
  display: flex;
  flex-direction: row;
  min-height: 50rem;
  max-height: 50rem;
}
.card {
  max-width: 80rem;
  background: white;
  box-shadow: 0px 3px 7px rgba(54, 64, 82, 0.25);
  border-radius: 7px;
  margin: 3em auto;
}
@media screen and (max-width: 768px) {
  .card {
    box-shadow: none;
    flex-direction: column !important;
  }
  .contacts {
    border-right: none;
    border-bottom: 1px solid #ececec;
    width: 100%;
    min-width: auto;
    max-width: 100%;
    margin: 0 auto;
    a {
      display: flex;
      justify-content: center;
    }
  }
  .conversation {
    margin: 0 auto;
    width: 100%;
    min-width: auto;
    max-width: 100%;
  }
}
</style>

<script>
import axios from "../request";
import Message from "../components/Message";
export default {
  components: {
    Message
  },
  data() {
    return {
      contacts: [],
      selectedUser: undefined,
      messages: [],
      newMessage: ""
    };
  },
  async mounted() {
    try {
      // TODO: REFACTOR THIS!

      // workaround to get it working when you're redirected to the page from a "Make an offer" button
      if (this.$route.params.id !== undefined) {
        try {
          const userResp = await axios.get("user/" + this.$route.params.id);
          this.selectedUser = userResp.data;
          this.onSelectedUserChange();

          const resp = await axios.get("chat/contacts");
          resp.data.contacts.forEach(async contact => {
            const contactUser = await axios.get(`user/${contact}`);
            this.contacts.push(contactUser.data);
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        const resp = await axios.get("chat/contacts");
        resp.data.contacts.forEach(async contact => {
          const contactUser = await axios.get(`user/${contact}`);
          this.contacts.push(contactUser.data);
          this.selectedUser = this.contacts[0];
          this.onSelectedUserChange();
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    displayContacts() {
      return this.$route.params.id === undefined;
    }
  },
  methods: {
    async onSelectedUserChange() {
      try {
        const resp = await axios.get(`chat/${this.selectedUser.id}`);
        this.messages = resp.data;
      } catch (error) {
        console.log(error);
      }
    },
    changeSelectedUser(user) {
      this.selectedUser = user;
      this.onSelectedUserChange();
    },
    async sendMessage() {
      if (this.newMessage === "" || this.newMessage === undefined) return;

      try {
        const resp = await axios.post("chat", {
          to: this.selectedUser.id,
          message: this.newMessage
        });
        if (resp.status === 200) {
          this.messages.push(resp.data);
          this.newMessage = "";
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
