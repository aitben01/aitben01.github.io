<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Projet AIT</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    .header {
      background-color: #6a1b9a;
      color: white;
      padding: 20px;
      text-align: center;
    }

    .nav {
      background-color: #8e24aa;
      overflow: hidden;
    }

    .nav a {
      float: left;
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    .nav a:hover {
      background-color: #ab47bc;
    }

    main {
      padding: 20px;
      background-color: white;
    }

    footer {
      background-color: #6a1b9a;
      color: white;
      text-align: center;
      padding: 10px;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  </style>
</head>
<body>

  <header>
    <h1>Bienvenue sur le site éducatif AIT</h1>
    <p>Ressources scolaires pour tous les niveaux</p>
  </header>

  <nav>
    <a href="Accueil.html">Accueil</a>
    <a href="primaire.html">Primaire</a>
    <a href="pre-scolaire.html">Pré-scolaire</a>
    <a href="college.html">Collège</a>
    <a href="lycee.html">Lycée</a>
    <a href="jeux.html">Jeux éducatifs</a>
    <a href="contact.html">Contact</a>
  </nav>

  <main>
    <h2>À propos du projet</h2>
    <p>Ce site propose des ressources en mathématiques, arabe et autres matières pour les élèves du primaire au lycée. 
    Vous y trouverez des quiz, des exercices, des défis et des jeux pour apprendre tout en s'amusant.</p>
  </main>

  <footer>
    &copy; 2025 Projet AIT - Tous droits réservés.
  </footer>

</body>
</html>
<style>
  .header {
    background: linear-gradient(90deg, #6a1b9a 60%, #8e24aa 100%);
    box-shadow: 0 2px 8px rgba(106,27,154,0.2);
    border-radius: 0 0 20px 20px;
  }
  .nav {
    background: linear-gradient(90deg, #8e24aa 60%, #ab47bc 100%);
    border-radius: 0 0 10px 10px;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px rgba(142,36,170,0.1);
  }
  .nav a {
    transition: background 0.3s, transform 0.2s;
    border-radius: 5px;
    margin: 0 4px;
    font-weight: bold;
    letter-spacing: 0.5px;
  }
  .nav a:hover {
    background: #fff;
    color: #8e24aa;
    transform: scale(1.08);
  }
  main {
    background: #fff url('https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80') no-repeat right bottom;
    background-size: 200px 150px;
    border-radius: 20px;
    box-shadow: 0 4px 16px rgba(106,27,154,0.08);
    max-width: 800px;
    margin: 30px auto 80px auto;
    min-height: 300px;
  }
  .cta-btn {
    display: inline-block;
    margin-top: 30px;
    padding: 14px 32px;
    background: linear-gradient(90deg, #8e24aa 60%, #6a1b9a 100%);
    color: #fff;
    border: none;
    border-radius: 30px;
    font-size: 1.2em;
    font-weight: bold;
    letter-spacing: 1px;
    box-shadow: 0 2px 8px rgba(142,36,170,0.15);
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
    text-decoration: none;
  }
  .cta-btn:hover {
    background: #ab47bc;
    color: #fff;
    transform: scale(1.05);
  }
  @media (max-width: 600px) {
    main {
      background-size: 120px 90px;
      padding: 10px;
    }
    .cta-btn {
      width: 100%;
      font-size: 1em;
      padding: 12px 0;
    }
  }
</style>

<main style="text-align:center;">
  <img src="https://cdn.pixabay.com/photo/2017/01/31/13/14/school-2027520_1280.png" alt="Éducation" style="width:120px; margin-bottom:20px; border-radius:50%; box-shadow:0 2px 8px rgba(106,27,154,0.15);">
  <h2>À propos du projet</h2>
  <p>Ce site propose des ressources en mathématiques, arabe et autres matières pour les élèves du primaire au lycée. 
  Vous y trouverez des quiz, des exercices, des défis et des jeux pour apprendre tout en s'amusant.</p>
  <a href="jeux.html" class="cta-btn">Découvrir les jeux éducatifs</a>
</main>
