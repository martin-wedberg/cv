// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ 
    title: 'Multimedia Library', 
    subtitle: 'Created for Svenskt Demenscentrum',
    overview: {
      title: 'Creating an interface for nurses and caretakers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo ipsum libero, vel mollis mauris pharetra non. Quisque ultricies eros ipsum, eu porttitor erat pharetra in. Cras dapibus, arcu sed imperdiet auctor, est massa finibus est, ut lacinia massa purus ut lectus. Maecenas viverra elit sed blandit elementum. Morbi nisl nisi, molestie a sapien ut, tincidunt malesuada ex. Vivamus placerat, arcu at mattis eleifend, diam ex tincidunt diam, sit amet volutpat metus turpis sed odio.',
      role: 'UX Designer',
      client: 'Svenskt Demenscentrum',
      time: 'Jan 2020 - Oct 2020',
    },
    quote: '“Really nice quote here or something similar”',
    process: {
      title: 'How was the application designed?',
      methods: [{method: 'Lorem'}, {method: 'Ipsum'}, {method: 'Lorem'}, {method: 'Ipsum'}],
      technologies: [{technology: 'Lorem'}, {technology: 'Ipsum'}, {technology: 'Lorem'}, {technology: 'Ipsum'}],
    }
  })
}
