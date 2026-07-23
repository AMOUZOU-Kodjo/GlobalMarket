# Chapitre 10 — API REST : Support & Uploads

## 10.1 Support

Base URL : `/api/support`

### 10.1.1 GET /api/support/tickets

**Description :** Liste des tickets de support  
**Auth :** Oui  
**Règle :**
- Buyer/Admin voient tous les tickets
- Seller voit les siens + tickets liés à ses produits
- Query : `page`, `limit`, `status`, `priority`, `category`

**Réponse 200 :**

```json
{
  "data": [
    {
      "id": "uuid",
      "subject": "Commande non reçue",
      "category": "order",
      "priority": "high",
      "status": "open",
      "messagesCount": 3,
      "lastMessage": { "message": "...", "createdAt": "..." },
      "createdAt": "..."
    }
  ]
}
```

---

### 10.1.2 POST /api/support/tickets

**Description :** Créer un ticket  
**Auth :** Oui  
**Body :**

```json
{
  "subject": "Commande non reçue",
  "category": "order | product | account | technical | other",
  "priority": "low | medium | high | urgent",
  "orderId": "uuid (optionnel)",
  "message": "Description du problème"
}
```

**Réponse 201 :** Ticket créé

---

### 10.1.3 GET /api/support/tickets/:id

**Description :** Détail d'un ticket + messages  
**Auth :** Oui (propriétaire ou admin)  
**Réponse 200 :**

```json
{
  "data": {
    "id": "uuid",
    "subject": "Commande non reçue",
    "category": "order",
    "priority": "high",
    "status": "in_progress",
    "order": { "id": "uuid", "orderNumber": "GM-2026-000123" },
    "messages": [
      {
        "id": "uuid",
        "sender": { "id": "uuid", "name": "Jean", "role": "buyer" },
        "message": "Ma commande du 15 juin n'est pas arrivée",
        "isInternal": false,
        "createdAt": "..."
      }
    ],
    "createdAt": "..."
  }
}
```

---

### 10.1.4 POST /api/support/tickets/:ticketId/messages

**Description :** Ajouter un message  
**Auth :** Oui (propriétaire ou admin)  
**Body :**

```json
{
  "message": "Nous avons contacté le transporteur",
  "attachments": ["url1", "url2"]
}
```

**Effets :**
- Incrémente le compteur de messages
- Met à jour `updatedAt`
- Si admin → notifie l'utilisateur
- Si utilisateur → notifie l'admin

---

### 10.1.5 POST /api/support/tickets/:id/close

**Description :** Fermer un ticket  
**Auth :** Oui (propriétaire ou admin)  
**Réponse 200 :**

```json
{ "message": "Ticket fermé" }
```

---

### 10.1.6 GET /api/support/kb

**Description :** Base de connaissances  
**Auth :** Non  
**Query :** `search`, `category`  
**Réponse 200 :**

```json
{
  "data": [
    {
      "id": "uuid",
      "title": "Comment suivre ma commande",
      "category": "Commandes",
      "excerpt": "...",
      "slug": "suivre-commande"
    }
  ]
}
```

---

### 10.1.7 GET /api/support/kb/:id

**Description :** Article de la base de connaissances  
**Auth :** Non  
**Réponse 200 :** Article complet (markdown)

---

## 10.2 Uploads

Base URL : `/api/uploads`

### 10.2.1 POST /api/uploads/image

**Description :** Upload d'une image  
**Auth :** Oui  
**Content-Type :** `multipart/form-data`  
**Champ :** `file`

**Contraintes :**
- Formats : jpg, jpeg, png, webp, gif
- Taille max : 5 Mo

**Réponse 201 :**

```json
{
  "data": {
    "id": "uuid",
    "url": "/uploads/images/abc123.webp",
    "filename": "abc123.webp",
    "mimetype": "image/webp",
    "size": 245000
  }
}
```

---

### 10.2.2 POST /api/uploads/images

**Description :** Upload multiple  
**Auth :** Oui  
**Champ :** `files` (max 10)  
**Réponse 201 :** Tableau d'images uploadées

---

### 10.2.3 POST /api/uploads/document

**Description :** Upload de document  
**Auth :** Oui  
**Champ :** `file`  
**Formats autorisés :** pdf, doc, docx  
**Taille max :** 10 Mo

---

### 10.2.4 DELETE /api/uploads/:fileId

**Description :** Supprimer un fichier  
**Auth :** Oui (propriétaire)  
**Effet :** Supprime le fichier physique + l'enregistrement BDD
