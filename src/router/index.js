import Vue from 'vue';
import Router from 'vue-router';
import Guitar from '@/components/Guitar';
import Info from '@/components/Info';

Vue.use(Router);

const appRouter = new Router({
  mode: 'hash',
  base: process.env.NODE_ENV === 'production'
    ? '/guitar-neck/'
    : '/',
  routes: [
    {
      path: '/:fret/:string/:scale',
      name: 'root',
      components: {
        guitar: Guitar,
        info: Info
      }
    },
    {
      path: '*',
      name: 'index',
      redirect: {
        name: 'root'
      }
    }
  ]
});

export const router = appRouter;
