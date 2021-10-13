export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '616720ff0349a200b93195e9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-53i882bg',
                  apiId: '6e146afa-b2af-414b-8427-991ee881f802'
                },
                {
                  buildHookId: '616720ffb75bad0a7fc679b0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-q56sp7rh',
                  apiId: 'eaf485fe-56f0-4c76-b370-5399eabbafcd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Cr4zzer/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-q56sp7rh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
