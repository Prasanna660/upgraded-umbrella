import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import { logoInstagram, logoFacebook, logoTwitter } from 'ionicons/icons';
import './BillsCard.css'; // You might need to create a CSS file for styling

const SocialMediaCard: React.FC = () => {
  return (
    <IonCard className="bills-card">
      <IonCardHeader>
        <IonCardTitle>Social Media Accounts</IonCardTitle>
        <IonCardSubtitle>Connect your accounts</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Select Social Account</IonCardContent>

      <div style={{ display: 'flex', justifyContent: 'space-between' }} className="responsive-buttons-container">
        <IonButton shape="round">
          <IonIcon icon={logoInstagram} />
          Instagram
        </IonButton>

        <IonButton shape="round">
          <IonIcon icon={logoFacebook} />
          Facebook
        </IonButton>

        <IonButton shape="round">
          <IonIcon icon={logoTwitter} />
          Twitter
        </IonButton>
      </div>
    </IonCard>
  );
}

export default SocialMediaCard;
