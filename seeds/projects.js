/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    {
      id: 1, 
      project_name: 'portfolio website', 
      repo_link: "https://github.com/marcellui/marcellui", 
      description: "what you are looking at right now"
    },
    {
      id: 2, 
      project_name: 'Industry project frontend (hackathon)', 
      repo_link: "https://github.com/AhmedSomaan/industry-project-fe/tree/feature-ahmed", 
      description: "Our solution to getting Roku more subscribers"
    },
    {
      id: 3, 
      project_name: 'Industry project backend (hackathon)', 
      repo_link: "https://github.com/AhmedSomaan/industry-project-be", 
      description: ""
    },
    {
      id: 4, 
      project_name: 'trivial trivia (hackathon)', 
      repo_link: "https://github.com/AZubaidi/bstn-hackathon", 
      description: "trivia api, asks given number of questions, checks for correct answer"
    }
  ]);
};
