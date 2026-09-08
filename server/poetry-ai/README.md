# 实时 AI 选句后端

此目录是完整的 Cloudflare Worker 后端，独立于 GitHub Pages 部署。当前网页的实时模式尚未接通；普通随机选段和 AI 预选句库不依赖它。Codex 对话登录或订阅不能作为网页 API 凭据。

## 接通步骤

1. 在 Cloudflare 账户部署此 Worker；可用 Wrangler CLI 在本目录执行 `npx wrangler login`。
2. 在 OpenAI API 项目中创建服务密钥，使用 `npx wrangler secret put OPENAI_API_KEY` 的交互提示录入。不要将密钥写入网页、仓库、配置文件或聊天。
3. 在 `wrangler.toml` 的 `OPENAI_MODEL` 设置账户可用、支持 Responses 和结构化输出的模型。默认 `gpt-5.4-mini`，可以更换。模型与 Codex 产品的登录是不同层面的配置。
4. 执行 `npx wrangler deploy`，获得 HTTPS Worker 地址。
5. 将地址填入 `_data/poetry_cards.yml` 的 `realtime_endpoint`，提交网站更新。访客即可自行选择实时模式。

## 请求契约

POST JSON：`{"poem":null,"mood":"山川与希望"}`。`poem` 为 `null` 时从全部诗歌随机抽取 12 首候选，让模型按意境选择；指定 `key` 时只处理那首。返回 `{"poem":"p-...","excerpt":"原诗片段","method":"live-ai"}`。

后端从固定的本站诗库 URL 获取原文，不接受浏览器提交任意诗稿或任意上游 URL。模型只返回原文行号，后端重建片段，前端再次逐字核对。设置了超时、输入长度、来源检查和频率限制；异常会明确提示，不伪装为实时 AI 成功。

Worker 频率限制是区域性的保护，并非全局费用硬上限。启用前在模型项目中设置适合自己的预算与通知。若需要更强的公开访问控制，可以进一步接入 Turnstile。当前代码在未配置密钥、模型或限流绑定时返回 503，避免误启用。

已做本地模拟测试；真实模型调用必须在配置有效密钥和部署后验证。

官方参考：[OpenAI Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs)、[Cloudflare secrets](https://developers.cloudflare.com/workers/configuration/secrets/)、[Rate limiting](https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/)。
