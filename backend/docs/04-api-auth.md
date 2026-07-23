# Chapitre 4 — API REST : Authentification

Base URL : `/api/auth`

## 4.1 POST /api/auth/login

**Description :** Connexion utilisateur  
**Auth :** Non  
**Body :**

```json
{
  "email": "string (email valide)",
  "password": "string (min 8 caractères)"
}
```

**Réponse 200 :**

```json
{
  "data": {
    "user": {
      "id": "uuid",
      "email": "string",
      "name": "string",
      "role": "buyer | seller | admin | delivery",
      "avatar": "string | null",
      "emailVerified": false
    },
    "token": "jwt_token",
    "refreshToken": "jwt_refresh_token"
  }
}
```

**Erreurs :**
- 400 : `"Email et mot de passe requis"`
- 401 : `"Email ou mot de passe incorrect"`
- 403 : `"Compte suspendu"`

---

## 4.2 POST /api/auth/register

**Description :** Inscription nouvel utilisateur  
**Auth :** Non  
**Body :**

```json
{
  "name": "string (2-255 caractères)",
  "email": "string (email valide)",
  "password": "string (min 8, 1 majuscule, 1 chiffre)"
}
```

**Réponse 201 :**

```json
{
  "data": {
    "user": { "id": "...", "email": "...", "name": "...", "role": "buyer" },
    "token": "jwt_token",
    "refreshToken": "jwt_refresh_token"
  }
}
```

**Effets secondaires :**
- Envoie un email de vérification
- Crée un panier vide pour l'utilisateur

**Erreurs :**
- 400 : `"Un compte existe déjà avec cet email"`

---

## 4.3 POST /api/auth/logout

**Description :** Déconnexion (invalidation refresh token)  
**Auth :** Oui (Bearer token)  
**Réponse 200 :**

```json
{ "message": "Déconnexion réussie" }
```

**Effet :** Supprime le refresh token de la BDD.

---

## 4.4 GET /api/auth/me

**Description :** Profil utilisateur courant  
**Auth :** Oui  
**Réponse 200 :**

```json
{
  "data": {
    "id": "uuid",
    "email": "string",
    "name": "string",
    "phone": "string | null",
    "avatar": "string | null",
    "role": "buyer | seller | admin",
    "emailVerified": true,
    "createdAt": "2026-01-15T10:00:00.000Z"
  }
}
```

---

## 4.5 POST /api/auth/forgot-password

**Description :** Demande de réinitialisation de mot de passe  
**Auth :** Non  
**Body :**

```json
{ "email": "string" }
```

**Réponse 200 :**

```json
{ "message": "Si cet email existe, un lien de réinitialisation vous a été envoyé" }
```

**Note :** Retourne toujours 200 pour éviter l'énumération d'emails.  
**Effet :** Génère un token de reset (expiration : 1h), envoie un email.

---

## 4.6 POST /api/auth/reset-password

**Description :** Réinitialisation du mot de passe  
**Auth :** Non  
**Body :**

```json
{
  "token": "string (token reçu par email)",
  "password": "string (nouveau mot de passe)"
}
```

**Réponse 200 :**

```json
{ "message": "Mot de passe réinitialisé avec succès" }
```

**Erreurs :**
- 400 : `"Token invalide ou expiré"`

---

## 4.7 POST /api/auth/verify-email

**Description :** Vérification de l'email  
**Auth :** Non  
**Body :**

```json
{ "code": "string (code à 6 chiffres)" }
```

**Réponse 200 :**

```json
{ "message": "Email vérifié avec succès" }
```

**Erreurs :**
- 400 : `"Code invalide ou expiré"`

---

## 4.8 POST /api/auth/refresh-token

**Description :** Renouvellement du token d'accès  
**Auth :** Non  
**Body :**

```json
{ "refreshToken": "string" }
```

**Réponse 200 :**

```json
{
  "data": {
    "token": "nouveau_jwt_token",
    "refreshToken": "nouveau_refresh_token"
  }
}
```

---

## 4.9 PUT /api/auth/profile

**Description :** Mise à jour du profil  
**Auth :** Oui  
**Body :**

```json
{
  "name": "string (optionnel)",
  "phone": "string (optionnel)",
  "avatar": "string (optionnel, URL)"
}
```

**Réponse 200 :**

```json
{ "data": { "id": "...", "name": "...", "phone": "...", "avatar": "..." } }
```

---

## 4.10 PUT /api/auth/change-password

**Description :** Changement de mot de passe  
**Auth :** Oui  
**Body :**

```json
{
  "currentPassword": "string",
  "newPassword": "string (min 8, 1 majuscule, 1 chiffre)"
}
```

**Réponse 200 :**

```json
{ "message": "Mot de passe modifié avec succès" }
```

**Erreurs :**
- 400 : `"Le mot de passe actuel est incorrect"`
