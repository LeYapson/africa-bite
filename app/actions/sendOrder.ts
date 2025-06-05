'use server';

// Type pour l'état précédent et données de formulaire
type FormState = {
  orderStatus: boolean;
  message: string;
  orderId: number | null;
};

export default async function sendOrder(prevState: FormState, formData: FormData) {
  // Simulation d'une latence réseau
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  try {
    // Récupérer les données du formulaire
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    
    // Vérifier les données
    if (!username || !email) {
      return {
        orderStatus: false,
        message: "Veuillez remplir tous les champs obligatoires",
        orderId: null
      };
    }
    
    // Générer un numéro de commande aléatoire
    const orderId = Math.floor(Math.random() * 10000);
    
    // Simuler l'enregistrement en base de données
    console.log('Commande enregistrée :', {
      username,
      email,
      // Autres données de commande
      orderId
    });
    
    return {
      orderStatus: true,
      message: `Merci ${username}, votre salade a été commandée avec succès!`,
      orderId: orderId
    };
  } catch (error) {
    console.error('Erreur lors de la commande:', error);
    return {
      orderStatus: false,
      message: "Une erreur est survenue lors de la commande. Veuillez réessayer.",
      orderId: null
    };
  }
}