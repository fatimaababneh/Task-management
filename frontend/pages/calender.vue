<template>

  <v-app><Nav/>
    <div
      class="ma-4"
      style="height: 100%"
    >
    
      <v-calendar
        :events="events"
        type="week"
        event-color="purple"
        value="2022-04-16"
        now="2022-04-16"
      >
      </v-calendar>
    </div>
  </v-app>
</template>

<script>
import Nav from '../components/Nav.vue'
export default {
    name: "App",
    data: () => {
        return {
            events: [
                {
                    name: "Event 1",
                    start: "2022-04-10T02:00:00",
                    end: "2022-04-10T04:00:00",
                    timed: true,
                },
                {
                    name: "Event 2",
                    start: "2022-04-12T08:00:00",
                    end: "2022-04-12T10:00:00",
                    timed: true,
                },
                {
                    name: "Event 3",
                    start: "2022-04-15T04:00:00",
                    end: "2022-04-15T06:00:00",
                    timed: true,
                },
            ],
        };
    },
    components: { Nav }
};
</script>