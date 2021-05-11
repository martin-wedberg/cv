// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ 
    title: 'RiksdagsViz', 
    subtitle: 'Created at the Royal Institute of Technology',
    overview: {
      title: 'Uncovering what is happening in the buildings of power',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo ipsum libero, vel mollis mauris pharetra non. Quisque ultricies eros ipsum, eu porttitor erat pharetra in. Cras dapibus, arcu sed imperdiet auctor, est massa finibus est, ut lacinia massa purus ut lectus. Maecenas viverra elit sed blandit elementum. Morbi nisl nisi, molestie a sapien ut, tincidunt malesuada ex. Vivamus placerat, arcu at mattis eleifend, diam ex tincidunt diam, sit amet volutpat metus turpis sed odio.',
      role: 'Frontend Developer',
      client: 'The Royal Institute of Technology, Stockholm',
      time: 'Jan 2019 - Oct 2019',
    },
    quote: '“Visualizing the Swedish Parliament is cool”',
    process: {
      title: 'How was the website designed?',
      methods: [{method: 'Lorem'}, {method: 'Ipsum'}, {method: 'Lorem'}, {method: 'Ipsum'}],
      technologies: [{technology: 'Lorem'}, {technology: 'Ipsum'}, {technology: 'Lorem'}, {technology: 'Ipsum'}],
    }
  })
}
