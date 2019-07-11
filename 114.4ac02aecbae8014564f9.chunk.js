(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{400:function(a,n,s){"use strict";s.r(n),n.default='<p><a href="https://npmjs.com/package/raw-loader"><img src="https://img.shields.io/npm/v/raw-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org"><img src="https://img.shields.io/node/v/raw-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/raw-loader"><img src="https://david-dm.org/webpack-contrib/raw-loader.svg" alt="deps"></a>\n<a href="https://dev.azure.com/webpack-contrib/raw-loader/_build/latest?definitionId=10&#x26;branchName=master"><img src="https://dev.azure.com/webpack-contrib/raw-loader/_apis/build/status/webpack-contrib.raw-loader?branchName=master" alt="tests"></a>\n<a href="https://codecov.io/gh/webpack-contrib/raw-loader"><img src="https://codecov.io/gh/webpack-contrib/raw-loader/branch/master/graph/badge.svg" alt="coverage"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a>\n<a href="https://packagephobia.now.sh/result?p=raw-loader"><img src="https://packagephobia.now.sh/badge?p=raw-loader" alt="size"></a></p>\n<p>A loader for webpack that allows importing files as a String.</p>\n<h2 id="getting-started">Getting Started<a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To begin, you\'ll need to install <code>raw-loader</code>:</p>\n<pre><code class="hljs language-console">$ npm install raw-loader --save-dev\n</code></pre>\n<p>Then add the loader to your <code>webpack</code> config. For example:</p>\n<p><strong>file.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> txt <span class="token keyword">from</span> <span class="token string">\'./file.txt\'</span><span class="token punctuation">;</span></code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.txt$/i</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token string">\'raw-loader\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>Or from the command-line:</p>\n<pre><code class="hljs language-console">$ webpack --module-bind \'txt=raw-loader\'\n</code></pre>\n<p>And run <code>webpack</code> via your preferred method.</p>\n<h2 id="examples">Examples<a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="inline">Inline<a href="#inline" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> txt <span class="token keyword">from</span> <span class="token string">\'raw-loader!./file.txt\'</span><span class="token punctuation">;</span></code></pre>\n<p>Beware, if you already define loader(s) for extension(s) in <code>webpack.config.js</code> you should use:</p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> css <span class="token keyword">from</span> <span class="token string">\'!!raw-loader!./file.css\'</span><span class="token punctuation">;</span> <span class="token comment">// Adding `!!` to a request will disable all loaders specified in the configuration</span></code></pre>\n<h2 id="contributing">Contributing<a href="#contributing" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Please take a moment to read our contributing guidelines if you haven\'t yet done so.</p>\n<p><a href="https://github.com/webpack-contrib/raw-loader/blob/master/.github/CONTRIBUTING.md">CONTRIBUTING</a></p>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/raw-loader/blob/master/LICENSE">MIT</a></p>\n'}}]);