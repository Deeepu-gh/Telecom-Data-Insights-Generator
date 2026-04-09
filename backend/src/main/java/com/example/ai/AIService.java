package com.example.ai;

import org.springframework.stereotype.Service;

@Service
public class AIService {

    private final AIAgent aiAgent;

    public AIService(AIAgent aiAgent) {
        this.aiAgent = aiAgent;
    }

 
    public String analyzeData(String input) {
        return aiAgent.process(input);
    }
}
