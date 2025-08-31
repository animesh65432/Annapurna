2025-08-31T05:48:39.852Z [info] To prepare the high-fibre dough, combine the whole wheat flour, oat bran, ajwain, and a pinch of salt in a large bowl (parat). Add 1 teaspoon of ghee and mix well. Gradually add lukewarm water and knead for 7-8 minutes to form a soft, pliable dough. Cover with a damp cloth and let it rest for at least 20 minutes; this helps the gluten relax and makes rolling easier.. For the filling, ensure the boiled potatoes are completely cool before mashing to avoid a sticky mixture. Mash them until coarse, not pasty. Add the steamed green peas, finely chopped onion, ginger, green chillies, and fresh coriander leaves to the mashed potatoes.. Add all the powdered spices - coriander powder, garam masala, amchur, turmeric powder, and salt to taste - to the potato mixture. Mix everything gently but thoroughly. Avoid overmixing. Taste and adjust seasoning if needed. The filling should be flavourful and dry.. Divide the rested dough and the potato filling into equal-sized balls (around 8 each). The filling ball should be slightly larger than the dough ball for a generous stuffing.. Take one dough ball and flatten it with your fingers into a 3-4 inch circle. Place a filling ball in the center. Bring the edges of the dough together to cover the filling, pinching at the top to seal it tightly like a 'potli' (pouch). Flatten the stuffed ball gently with your palm.. Lightly dust the stuffed ball with dry whole wheat flour. Using a rolling pin (belan), roll it out gently into a 6-7 inch circle. Apply even pressure to prevent the filling from breaking through. If it tears slightly, patch it with a small piece of dough.. Heat a flat griddle (tawa) on medium-high heat. Place the rolled paratha on the hot tawa. Cook for about 45-60 seconds or until you see small bubbles appearing on the surface. Flip the paratha over.. Allow the second side to cook for about a minute. Now, brush a little ghee or oil on the top surface and flip again. Using a flat spatula, press down gently on the edges to help it puff up and cook evenly. The paratha is done when it has golden-brown spots on both sides and is cooked through.. Serve the Aloo Paratha immediately, hot off the tawa. The best accompaniments are a bowl of low-fat curd (dahi) or Greek yogurt, a tangy mango pickle (aam ka achaar), or fresh mint-coriander chutney for a complete, satisfying meal.. To store, let the parathas cool completely. Stack them with parchment paper in between and store in an airtight container in the refrigerator for up to 2 days. To reheat, place on a warm tawa, sprinkle a few drops of water, cover, and heat on low flame for a minute on each side to restore softness. en
2025-08-31T05:48:40.595Z [info] BadRequestError: BadRequestError
Status code: 400
Body: {
  "error": {
    "message": "Validation Error(s):\n- text: String should have at most 2500 characters",
    "code": "invalid_request_error",
    "request_id": "20250831_d0a48ba4-8fae-437d-9277-f62fe4331eed"
  }
}
    at TextToSpeech.<anonymous> (/var/task/backend/node_modules/sarvamai/dist/cjs/api/resources/textToSpeech/client/Client.js:104:31)
    at Generator.next (<anonymous>)
    at fulfilled (/var/task/backend/node_modules/sarvamai/dist/cjs/api/resources/textToSpeech/client/Client.js:41:58)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5) {
  statusCode: 400,
  body: {
    error: {
      message: 'Validation Error(s):\n' +
        '- text: String should have at most 2500 characters',
      code: 'invalid_request_error',
      request_id: '20250831_d0a48ba4-8fae-437d-9277-f62fe4331eed'
    }
  },
  rawResponse: {
    headers: Headers {
      date: 'Sun, 31 Aug 2025 05:48:40 GMT',
      'content-type': 'application/json',
      'content-length': '188',
      connection: 'keep-alive',
      server: 'uvicorn',
      'x-request-id': '20250831_d0a48ba4-8fae-437d-9277-f62fe4331eed',
      'access-control-allow-origin': '*',
      'strict-transport-security': 'max-age=31536000; includeSubDomains; preload'
    },
    redirected: false,
    status: 400,
    statusText: 'Bad Request',
    type: 'basic',
    url: 'https://api.sarvam.ai/text-to-speech'
  }
}