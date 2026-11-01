import test from "node:test";
import assert from "node:assert/strict";

import app from "./src/app.js";

async function request(method, path) {
    const server = app.listen(0);

    try {
        await new Promise((resolve, reject) => {
            if (server.listening) {
                resolve();
            } else {
                server.once("listening", resolve);
                server.once("error", reject);
            }
        });

        const { port } = server.address();

        const response = await fetch(`http://127.0.0.1:${port}${path}`, {
            method,
        });

        return {
            status: response.status,
            body: await response.text(),
            contentType: response.headers.get("content-type"),
        };
    } finally {
        await new Promise((resolve, reject) => {
            server.close((error) => {
                if (error) reject(error);
                else resolve();
            });
        });
    }
}

// ROOT

test("GET /", async () => {
    const result = await request("GET", "/");

    assert.equal(result.status, 200);
    assert.equal(result.body, "Get root route");
});

// USERS

test("GET /users", async () => {
    const result = await request("GET", "/users");

    assert.equal(result.status, 200);
    assert.equal(result.body, "Get users route");
});

test("POST /users", async () => {
    const result = await request("POST", "/users");

    assert.equal(result.status, 200);
    assert.equal(result.body, "Post users route");
});

test("GET /users/:userId", async () => {
    const result = await request("GET", "/users/123");

    assert.equal(result.status, 200);
    assert.equal(result.body, "Get user by Id route: 123");
});

test("PUT /users/:userId", async () => {
    const result = await request("PUT", "/users/123");

    assert.equal(result.status, 200);
    assert.equal(result.body, "Put user by Id route: 123");
});

test("DELETE /users/:userId", async () => {
    const result = await request("DELETE", "/users/123");

    assert.equal(result.status, 200);
    assert.equal(result.body, "Delete user by Id route: 123");
});

// ARTICLES

test("GET /articles", async () => {
    const result = await request("GET", "/articles");

    assert.equal(result.status, 200);
    assert.equal(result.body, "Get articles route");
});

test("POST /articles", async () => {
    const result = await request("POST", "/articles");

    assert.equal(result.status, 200);
    assert.equal(result.body, "Post articles route");
});

test("GET /articles/:articleId", async () => {
    const result = await request("GET", "/articles/456");

    assert.equal(result.status, 200);
    assert.equal(result.body, "Get article by Id route: 456");
});

test("PUT /articles/:articleId", async () => {
    const result = await request("PUT", "/articles/456");

    assert.equal(result.status, 200);
    assert.equal(result.body, "Put article by Id route: 456");
});

test("DELETE /articles/:articleId", async () => {
    const result = await request("DELETE", "/articles/456");

    assert.equal(result.status, 200);
    assert.equal(result.body, "Delete article by Id route: 456");
});

// 404

test("GET unknown route returns 404", async () => {
    const result = await request("GET", "/unknown");

    assert.equal(result.status, 404);
    assert.equal(result.body, "Route not found");
});
